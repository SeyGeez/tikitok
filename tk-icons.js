// Icônes maison Tikitok : elles remplacent les emojis partout sur le site (même dessin sur tous les systèmes, couleur = celle du texte).
// Utilisation : TKI.svg('gift') renvoie le code SVG ; la taille suit la police (1em) ou la règle CSS de l'endroit.
// Style : traits arrondis de 1,8 px, un aplat translucide pour le volume. viewBox 24 × 24.
(function () {
  const F = 'fill="currentColor" fill-opacity=".3"';
  const P = {
    gift: `<rect x="3.5" y="9" width="17" height="11.5" rx="2" ${F}/><path d="M12 9v11.5M3.5 14h17"/><path d="M12 9C11 5.2 6.8 4.6 6.8 7.2 6.8 9.2 9.8 9 12 9zM12 9c1-3.8 5.2-4.4 5.2-1.8C17.2 9.2 14.2 9 12 9z"/>`,
    target: `<circle cx="12" cy="12" r="8.2"/><circle cx="12" cy="12" r="4.2" ${F}/><circle cx="12" cy="12" r="1" fill="currentColor"/><path d="M12 1.8v4.2M12 18v4.2M1.8 12H6M18 12h4.2"/>`,
    shield: `<path d="M12 2.6l8 3v6c0 5-3.4 8.6-8 9.9-4.6-1.3-8-4.9-8-9.9v-6z" ${F}/><path d="M8.6 12l2.4 2.4 4.4-4.8"/>`,
    pickaxe: `<path d="M3.6 9.6C6.4 5 13.6 3.6 20.4 6.6c-1.2.2-2.2.8-3 1.6-3.2-1.4-7.2-.6-9.6 2.2z" ${F}/><path d="M13.4 9.2L5.4 20.4"/><path d="M12.4 8.4l1.9 1.4"/>`,
    blaster: `<path d="M3 8.2h14.5l3 3v2.4h-5.2v1.6l-1 4.4H9.6l.9-4.4H3z" ${F}/><path d="M17.5 8.2v3.4M6.5 11.4h5"/>`,
    palm: `<path d="M12.6 21.2c-.1-4.4.3-7.6 2.2-10.6"/><path d="M14.8 10.6C13.6 6.6 8.8 5.4 4.8 7.8c3.2-.4 5.2.6 6.6 3zM14.8 10.6c1.6-3.4 5.2-4.4 8-2.2-3 0-4.6 1-5.6 2.8z" ${F}/><path d="M14.8 10.6c-1.6-3.2-.8-6.6 2-8.6-.6 3 0 5.2.2 8.2zM14.8 10.6c-3.4-.6-4.6 1-5.4 3"/>`,
    lion: `<circle cx="12" cy="12" r="9.4" stroke-dasharray="2.6 1.8"/><circle cx="12" cy="12.4" r="6" ${F}/><circle cx="7.2" cy="6.8" r="1.8"/><circle cx="16.8" cy="6.8" r="1.8"/><circle cx="9.8" cy="11.4" r=".9" fill="currentColor"/><circle cx="14.2" cy="11.4" r=".9" fill="currentColor"/><path d="M10.6 14.2h2.8L12 15.8zM12 15.8v1.4" />`,
    galaxy: `<ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(-28 12 12)" ${F}/><circle cx="12" cy="12" r="2.2" fill="currentColor"/><path d="M5 4.6v2.4M3.8 5.8h2.4M19.4 16.4v2.4M18.2 17.6h2.4"/>`,
    rose: `<path d="M12 3.6c3 0 5.2 2.1 5.2 4.8S15 13 12 13 6.8 11.1 6.8 8.4 9 3.6 12 3.6z" ${F}/><path d="M12 6.4c1.6 0 2.6 1 2.6 2.2M9.4 8.2c0-1.2 1-2 2.6-2"/><path d="M12 13v8M12 17.4c-3.1 0-4.6-1.6-5.1-3.6 2.6-.3 4.3.8 5.1 3.6z"/>`,
    rocket: `<path d="M12 2.2c3.6 2.6 5.2 6.8 4.3 11.8L12 17.4 7.7 14C6.8 9 8.4 4.8 12 2.2z" ${F}/><circle cx="12" cy="9" r="1.8"/><path d="M7.7 13.8L4.4 15.4l1 4.2 3.6-1.6M16.3 13.8l3.3 1.6-1 4.2-3.6-1.6M12 17.4v4"/>`,
    heart: `<path d="M12 20.4S4 15.7 4 10.2C4 7 6.2 5 8.8 5c1.4 0 2.6.7 3.2 1.8C12.6 5.7 13.8 5 15.2 5 17.8 5 20 7 20 10.2c0 5.5-8 10.2-8 10.2z" ${F}/>`,
    flame: `<path d="M12 21.4c-4.2 0-6.8-2.7-6.8-6.2 0-2.6 1.6-4.2 3-5.8.8-.9 1.5-2 1.7-3.6 3.2 1.6 5.8 4.2 6.8 7.2.5-.8.7-1.7.6-2.6 1.7 1.5 2.5 3.1 2.5 4.8 0 3.6-3.2 6.2-7.8 6.2z" ${F}/><path d="M12 18.4c-1.8 0-2.9-1.1-2.9-2.6 0-1.1.7-1.8 1.4-2.5.4.8 1.1 1.4 2 1.7.3-.4.4-.8.4-1.2.9.7 1.4 1.4 1.4 2.2 0 1.4-1 2.4-2.3 2.4z"/>`,
    ghost: `<path d="M5 20.6V11a7 7 0 0 1 14 0v9.6l-2.4-1.9-2.3 1.9-2.3-1.9-2.3 1.9-2.4-1.9z" ${F}/><circle cx="9.6" cy="11" r="1" fill="currentColor"/><circle cx="14.4" cy="11" r="1" fill="currentColor"/>`,
    bat: `<path d="M12 7.6c1 0 1.6.8 2 1.8 1.6-1.6 4.6-2 8-.3-1.2 1-1.7 2.5-1.3 4.3-1.3-.7-2.6-.5-3.4.5-.9-.5-1.7-.2-2.2.8L12 17l-1.8-2.1c-.5-1-1.3-1.3-2.2-.8-.8-1-2.1-1.2-3.4-.5.4-1.8-.1-3.3-1.3-4.3 3.4-1.7 6.4-1.3 8 .3.4-1 1-1.8 2-1.8z" fill="currentColor" fill-opacity=".55"/>`,
    pumpkin: `<ellipse cx="12" cy="14.2" rx="9" ry="6.6" ${F}/><path d="M12 7.8c-1.4 1.6-1.4 11 0 12.8M7.4 8.9c-2.4 2.5-2.4 8.7 0 11.2M16.6 8.9c2.4 2.5 2.4 8.7 0 11.2"/><path d="M12 7.8V4.6c.3-1 1.2-1.6 2.3-1.6"/>`,
    star: `<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" ${F}/>`,
    eye: `<path d="M2 12s3.6-6.8 10-6.8S22 12 22 12s-3.6 6.8-10 6.8S2 12 2 12z"/><circle cx="12" cy="12" r="3" ${F}/>`,
    chat: `<path d="M4 5.5h16v11H10l-5 4v-4H4z" ${F}/><path d="M8 10h8M8 13h5"/>`,
    help: `<circle cx="12" cy="12" r="9" ${F}/><path d="M9.3 9.4c.3-1.6 1.5-2.4 2.9-2.4 1.6 0 2.8 1 2.8 2.4 0 2-2.7 2.1-2.7 4"/><circle cx="12.3" cy="16.8" r=".9" fill="currentColor"/>`,
    spark: `<path d="M12 2.4l2.3 7.3 7.3 2.3-7.3 2.3L12 21.6l-2.3-7.3L2.4 12l7.3-2.3z" fill="currentColor" fill-opacity=".85" stroke-width="1.2"/>`,
  };
  const svg = (name, cls) => P[name] ? `<svg class="tki${cls ? ' ' + cls : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name]}</svg>` : '';
  // pour le CSS (content: url(...)) : même dessin, couleur fixe
  const uri = (name, color) => 'data:image/svg+xml,' + encodeURIComponent(svg(name).replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" ').replace(/currentColor/g, color));
  window.TKI = { svg, uri, names: Object.keys(P) };
})();
