// Scène 3D du site (prototype) : une vraie caméra qui voyage de la capture de l'Accueil jusqu'aux écrans de l'appli.
//   chapitre 0 : la capture de l'Accueil, assemblée en 20 plaques
//   chapitre 1 : elle se démonte en 3D
//   chapitre 2 : tout converge en spirale géante, vue d'en haut (la tornade)
//   chapitres 3 à 6 : la caméra descend la spirale, un écran vient se placer face à toi
import * as THREE from 'three';
import { EffectComposer } from './vendor/three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from './vendor/three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from './vendor/three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from './vendor/three/examples/jsm/postprocessing/OutputPass.js';
import { RoundedBoxGeometry } from './vendor/three/examples/jsm/geometries/RoundedBoxGeometry.js';

const root = document.querySelector('.monde');
const canvas = document.getElementById('monde-canvas');
const chs = [...document.querySelectorAll('.ch')];
const NCH = chs.length - 1;                       // dernier chapitre = 6
const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
const freezeU = new URLSearchParams(location.search).get('u');   // pour les captures de test : ?u=1.5
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v)), lerp = (a, b, t) => a + (b - a) * t;
const ease = (t) => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
let seed = 11; const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };

let renderer;
try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' }); }
catch (e) { document.documentElement.classList.add('no3d'); throw e; }
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.6;
const scene = new THREE.Scene(); scene.background = new THREE.Color(0x05030c); scene.fog = new THREE.FogExp2(0x05030c, .034);
const camera = new THREE.PerspectiveCamera(36, 1, .1, 120);
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), .5, .55, .85); composer.addPass(bloom);
composer.addPass(new OutputPass());

let mobile = false;
function resize() {
  const w = innerWidth, h = innerHeight; mobile = w < 760 || h > w * 1.15;
  const dpr = Math.min(devicePixelRatio || 1, mobile ? 1.5 : 1.75);
  renderer.setPixelRatio(dpr); renderer.setSize(w, h, false); composer.setPixelRatio(dpr); composer.setSize(w, h);
  camera.aspect = w / h; camera.fov = mobile ? 52 : 36; camera.updateProjectionMatrix();
}
resize();

// lumières : surtout pour les cadres métalliques
scene.add(new THREE.AmbientLight(0x6b4a9a, .35));
const key = new THREE.DirectionalLight(0xe0e8ff, 1.1); key.position.set(-4, 6, 8); scene.add(key);
const pk = new THREE.PointLight(0xff4fb4, 40, 30, 2); pk.position.set(5, 2, -3); scene.add(pk);
const vi = new THREE.PointLight(0x8b5cff, 30, 30, 2); vi.position.set(-4, -5, 2); scene.add(vi);

// ---------- textures ----------
const manager = new THREE.LoadingManager(); const loader = new THREE.TextureLoader(manager);
manager.onLoad = () => root.classList.add('pret'); setTimeout(() => root.classList.add('pret'), 6000);
const tex = (url) => { const t = loader.load(url); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t; };
const frameMat = new THREE.MeshStandardMaterial({ color: 0x1a0f38, metalness: .7, roughness: .32 });

function slab(map, w, h, uv, thin) {
  const g = new THREE.Group(), geo = new THREE.PlaneGeometry(w, h);
  if (uv) { const a = geo.attributes.uv; for (let i = 0; i < a.count; i++) a.setXY(i, uv[0] + a.getX(i) * uv[2], uv[1] + a.getY(i) * uv[3]); }
  const mat = new THREE.MeshBasicMaterial({ map, toneMapped: false, transparent: true });
  const f = new THREE.Mesh(geo, mat); f.position.z = .026; g.add(f);
  const b = new THREE.Mesh(geo, mat); b.position.z = -.026; b.rotation.y = Math.PI; g.add(b);
  const pad = thin ? -.03 : .04;
  g.add(new THREE.Mesh(new RoundedBoxGeometry(w + pad, h + pad, .05, 2, .02), frameMat));
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(w + .07, h + .07), new THREE.MeshBasicMaterial({ color: 0xff4fa0, transparent: true, opacity: 0, toneMapped: false }));
  glow.position.z = -.032; g.add(glow); g.userData = { glow, face: f };
  return g;
}

// ---------- les objets ----------
const W = [];            // tous les objets animés
const TYPE_R = { ecran: 5.4, vign: 3.4, plaque: 2.4, icone: 4.4 };
const TYPE_S = { ecran: 1, vign: 1, plaque: 1, icone: .55 };

// 1) la capture de l'Accueil, en 20 plaques (5 x 4)
const IMG_W = 3.4, IMG_H = IMG_W * 1760 / 2800, COLS = 5, ROWS = 4, accueil = tex('img/accueil.jpg');
for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) {
  const w = IMG_W / COLS, h = IMG_H / ROWS;
  const o = slab(accueil, w, h, [c / COLS, (ROWS - 1 - r) / ROWS, 1 / COLS, 1 / ROWS], true);
  W.push({ o, type: 'plaque', c, r, base: new THREE.Vector3(-IMG_W / 2 + w * (c + .5), IMG_H / 2 - h * (r + .5), 0) });
  scene.add(o);
}
// 2) les écrans de l'appli (du haut vers le bas de la spirale)
const ECRANS = [['design', 'img/design.jpg', 5.4], ['alertes', 'img/card-alertes.jpg', 4.6], ['classements', 'img/card-classements.jpg', 3.6], ['objectifs', 'img/card-objectifs.jpg', 2.7],
  ['gt', 'img/card-gt.jpg', 1.7], ['jeux', 'img/card-jeux.jpg', .8], ['mc', 'img/card-mc.jpg', -.2], ['fn', 'img/card-fn.jpg', -1.1], ['ow', 'img/card-ow.jpg', -2.1],
  ['mw', 'img/card-mw.jpg', -3.0], ['boutique', 'img/boutique.jpg', -4.0]];
const screens = {};
ECRANS.forEach(([nom, url, y], i) => { const o = slab(tex(url), 2.9, 2.9 * .625); const e = { o, type: 'ecran', nom, y, a: i / ECRANS.length * Math.PI * 2 }; W.push(e); screens[nom] = e; scene.add(o); });
// 3) des vignettes (morceaux des scènes d'overlays)
for (let i = 0; i < 12; i++) {
  const url = ECRANS[1 + (i % 9)][1], cx = (i * 37 % 3) / 3, cy = (i * 53 % 3) / 3, o = slab(tex(url), 1.5, .84, [cx * .66, cy * .66, .34, .34]);
  W.push({ o, type: 'vign', y: 5 - i / 11 * 10 }); scene.add(o);
}
// 4) de petites icônes lumineuses (comme les cadeaux)
const ICONS = ['rose', 'heart', 'gift', 'star', 'flame', 'galaxy', 'lion', 'rocket', 'spark', 'eye', 'heart', 'star'], COLS_I = ['#ff3d8b', '#ff7a1a', '#ffb347', '#b44dff', '#38c8ff', '#ff4fa0'];
ICONS.forEach((name, i) => {
  const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d'), t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const col = COLS_I[i % COLS_I.length], img = new Image();
  img.onload = () => { x.clearRect(0, 0, 128, 128); x.shadowColor = col; x.shadowBlur = 18; x.drawImage(img, 24, 24, 80, 80); x.drawImage(img, 24, 24, 80, 80); t.needsUpdate = true; };
  img.src = window.TKI ? TKI.uri(name, col) : '';
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, toneMapped: false, depthWrite: false })); s.scale.setScalar(1);
  W.push({ o: s, type: 'icone', y: 5.5 - i / 11 * 11 }); scene.add(s);
});
// placement des objets sur leur anneau
const count = { }; W.forEach((p) => { (count[p.type] = count[p.type] || []).push(p); });
const n = W.length;
W.forEach((p, i) => {
  p.i = i; p.rayon = TYPE_R[p.type]; p.S = TYPE_S[p.type];
  p.far = new THREE.Vector3((rnd() - .5) * 30, (rnd() - .5) * 18, -10 - rnd() * 14);   // d'où ils arrivent
  p.burst = new THREE.Vector3((rnd() - .5) * .6, (rnd() - .5) * .4, 0);
});
for (const [t, list] of Object.entries(count)) list.forEach((p, k) => { if (t !== 'ecran') p.a = k / list.length * Math.PI * 2 + (t === 'vign' ? .26 : t === 'icone' ? .13 : 0); if (t === 'plaque') p.y = 3.4 - k / (list.length - 1) * 6.8; });

// ---------- la caméra ----------
const FEAT = { 3: 'alertes', 4: 'objectifs', 5: 'jeux', 6: 'fn' };           // l'écran mis en avant à chaque chapitre
const WP = [
  { p: [0, .95, 5.6], t: [0, .72, 0], dx: 0, dy: .16, m: { p: [0, .75, 7.4], t: [0, .6, 0] } },
  { p: [4, 1.4, 4.6], t: [.1, 0, 0], dx: .2, dy: .08, m: { p: [3.6, 1.2, 9.5], t: [0, .3, 0] } },
  { p: [0, 7.5, 15.5], t: [0, .4, 0], dx: .16, m: { p: [0, 8.5, 21], t: [0, 1.2, 0] } },
];
for (let k = 3; k <= NCH; k++) { const y = screens[FEAT[k]].y; WP.push({ p: [0, y + .3, 9.6], t: [0, y, 4.6], dx: .21, m: { p: [0, y - .7, 11.4], t: [0, y - 1.25, 4.6] } }); }
const yEnd = screens.fn.y - 5; WP.push({ p: [0, yEnd + .5, 11], t: [0, yEnd - .6, 0], dx: .16, m: { p: [0, yEnd + .9, 13], t: [0, yEnd - 1.2, 0] } });
const va = new THREE.Vector3(), vb = new THREE.Vector3();
function placeCamera(u) {
  const w = Math.min(WP.length - 2, Math.floor(u)), q = ease(clamp(u - w)), A = WP[w], B = WP[w + 1];
  const P = (x) => (mobile && x.m ? x.m.p : x.p), T = (x) => (mobile && x.m ? x.m.t : x.t);
  camera.position.copy(va.fromArray(P(A)).lerp(vb.fromArray(P(B)), q));
  const tgt = va.fromArray(T(A)).lerp(vb.fromArray(T(B)), q).clone();
  camera.lookAt(tgt);
  const dx = mobile ? 0 : lerp(A.dx, B.dx, q), dy = lerp(A.dy || 0, B.dy || 0, q) * (mobile ? 1.4 : 1);
  camera.setViewOffset(innerWidth, innerHeight, -innerWidth * dx, -innerHeight * dy, innerWidth, innerHeight);
  root.style.setProperty('--voile', String(mobile ? .25 + .75 * clamp((u - .3) / .5) : clamp(dx / .12)));
}
// rotation de la spirale : chaque chapitre amène son écran en face
const rotAt = []; { let last = 0; rotAt[2] = 0; for (let k = 3; k <= NCH; k++) { let r = -screens[FEAT[k]].a; while (r < last + 1.2) r += Math.PI * 2; rotAt[k] = r; last = r; } rotAt[NCH + 1] = rotAt[NCH] + 2.4; }
function spiralRot(u) {
  if (u < 2) return -2.2 * (1 - ease(clamp(u - 1)));
  if (u >= NCH + 1) return rotAt[NCH + 1];
  if (u < 3) return lerp(0, rotAt[3], ease(u - 2));
  const w = Math.floor(u), f = u - w;
  return lerp(rotAt[w], rotAt[Math.min(NCH + 1, w + 1)], w >= NCH ? ease(clamp(f)) : ease(clamp((f - .3) / .4)));
}

// ---------- les particules ----------
const NP = 1200, pos = new Float32Array(NP * 3), PD = [];
for (let i = 0; i < NP; i++) PD.push([rnd() * 6.283, (rnd() - .5) * 18, 1 + rnd() * 9, .3 + rnd()]);
const pgeo = new THREE.BufferGeometry(); pgeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
const pts = new THREE.Points(pgeo, new THREE.PointsMaterial({ color: 0xffa6c8, size: .035, transparent: true, opacity: .7, depthWrite: false, blending: THREE.AdditiveBlending })); scene.add(pts);

// ---------- défilement -> u ----------
let cs = [];
const measure = () => { cs = chs.map((c) => c.getBoundingClientRect().top + scrollY + c.offsetHeight / 2); };
addEventListener('resize', () => { resize(); measure(); }); addEventListener('load', measure); measure();
function stepU() {
  if (freezeU !== null) return parseFloat(freezeU);
  const mid = scrollY + innerHeight * .5;
  if (mid <= cs[0]) return 0;
  for (let i = 1; i <= NCH; i++) if (mid <= cs[i]) return i - 1 + (mid - cs[i - 1]) / Math.max(1, cs[i] - cs[i - 1]);
  const last = chs[NCH], end = last.getBoundingClientRect().top + scrollY + last.offsetHeight;
  return NCH + clamp((mid - cs[NCH]) / Math.max(1, end - cs[NCH]));
}

// ---------- placement de chaque objet ----------
const P = new THREE.Vector3(), B = new THREE.Vector3(), F = new THREE.Vector3();
function placeObject(p, u, rot, focus, fk, t) {
  const o = p.o, expl = ease(clamp(u));
  let start, rx = 0, ry = 0, sc = 1;
  if (p.type === 'plaque') {
    start = P.copy(p.base).addScaledVector(p.burst, expl);
    start.z += expl * (p.r - 1.5) * .85 + expl * (p.c - 2) * .25; start.y += expl * (p.r - 1.5) * .32;
    rx = expl * (p.r - 1.5) * .12; ry = expl * (.25 + (p.c - 2) * .06);
  } else { start = P.copy(p.far); sc = .001; }
  const arr = ease(clamp((u - 1) * 1.15 - p.i / n * .15)), th = (p.a || 0) + rot;
  const wob = 1 + .03 * Math.sin(t * .8 + p.i);
  B.set(Math.sin(th) * p.rayon * wob, (p.y || 0) + Math.sin(t * .6 + p.i) * .06, Math.cos(th) * p.rayon * wob);
  let S = p.S;
  const feat = p.type === 'ecran' && p.nom === fk;
  if (focus > 0 && !feat) { B.z -= 9 * focus; B.x *= 1 + .5 * focus; S *= 1 - (p.type === 'icone' ? 1 : .35) * focus; }
  let thY = th;
  if (feat) { B.lerp(F.set(0, p.y, 5.15), ease(focus)); thY = lerp(th, 0, ease(focus)); S = lerp(1, .86, ease(focus)); }
  P.lerp(B, arr);
  o.position.copy(P);
  if (p.type !== 'icone') o.rotation.set(lerp(rx, 0, arr), lerp(ry, thY, arr), 0);
  let s = lerp(sc, S, arr);
  if (!feat) s *= ease(clamp((P.distanceTo(camera.position) - 2.6) / 1.4));       // ce qui frôle la caméra s'efface
  o.scale.setScalar(Math.max(.001, s)); o.visible = s > .01;
  if (o.userData.glow) o.userData.glow.material.opacity = feat ? ease(focus) * .9 : 0;
}

// ---------- boucle ----------
let uCur = 0, last = 0, time = 0, hidden = false;
const prog = document.getElementById('monde-prog');
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min((now - last) / 1000 || .016, .0333); last = now; if (!calm) time += dt;
  const target = stepU(); uCur = calm || freezeU !== null ? target : uCur + (target - uCur) * (1 - Math.exp(-8 * dt)); if (Math.abs(target - uCur) < 5e-4) uCur = target;
  const u = uCur;
  if (prog) prog.style.transform = `scaleX(${clamp(u / (NCH + 1))})`;
  hidden = u > NCH + 1 - .02 && scrollY > cs[NCH] + innerHeight;
  root.classList.toggle('apres', hidden); if (hidden) return;
  placeCamera(u);
  const rot = spiralRot(u);
  let fk = null, focus = 0;
  if (u >= 2.6 && u <= NCH + .1) { const k = clamp(Math.round(u), 3, NCH); fk = FEAT[k]; focus = clamp(1 - Math.abs(u - k) * 2.4) * 1.25; focus = clamp(focus); }
  for (const p of W) placeObject(p, u, rot, focus, fk, time);
  // particules
  const a = pgeo.attributes.position.array, k = u * .6 + time * .08;
  for (let i = 0; i < NP; i++) { const d = PD[i], an = d[0] + k * d[3]; a[i * 3] = Math.cos(an) * d[2]; a[i * 3 + 1] = d[1] + Math.sin(time * .3 + d[0]) * .2 - u * .35; a[i * 3 + 2] = Math.sin(an) * d[2] - 2; }
  pgeo.attributes.position.needsUpdate = true;
  composer.render();
}
requestAnimationFrame(frame);
