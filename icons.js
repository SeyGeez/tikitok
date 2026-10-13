// Icônes maison de Tikitok (remplacent les emojis de la page Design).
// Style : traits droits aux angles vifs (façon viseur / HUD), un trait principal + un détail doré.
// Chaque icône = [forme principale, détail doré]. viewBox 24 × 24.
window.TAB_ICONS = {
  chat:         ['M4 5h16v11h-7l-4 4v-4H4z', 'M8 9.5h8M8 12.5h5'],
  likes:        ['M12 20 3.5 11.5V7.5l3-3h3L12 7l2.5-2.5h3l3 3v4z', 'M16 9l1.5 1.5'],
  goal:         ['M8 3h8l5 5v8l-5 5H8l-5-5V8z', 'M12 7.5v9M7.5 12h9'],
  gifts:        ['M4 10h16v10H4zM3 6h18v4H3z', 'M12 6v14M12 6C10 3 6 3 7 6M12 6c2-3 6-3 5 0'],
  follows:      ['M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 20v-2.5L6 15h6l3 2.5V20z', 'M18 6v6M15 9h6'],
  versus:       ['M5 5l14 14M19 5L5 19', 'M12 9.5l2.5 2.5-2.5 2.5L9.5 12z'],
  top:          ['M7 4h10v5a5 5 0 0 1-10 0zM7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3M12 14v4M8 20h8', 'M10 7.5h4'],
  last:         ['M8 3h8l5 5v8l-5 5H8l-5-5V8z', 'M12 7v5l3.5 2'],
  goalDiamonds: ['M12 3l7 6-7 12L5 9z', 'M5 9h14M9 9l3 12 3-12'],
  goalFollows:  ['M12 3l8 4.5v9L12 21l-8-4.5v-9z', 'M12 9v6M9 12h6'],
  shares:       ['M5 9v10h14V9M12 15V3M8 7l4-4 4 4', 'M5 9h3M16 9h3'],
  timer:        ['M6 3h12M6 21h12M7 3v4l5 5-5 5v4M17 3v4l-5 5 5 5v4', 'M10 18h4'],
  poll:         ['M4 20V9h4v11zM10 20V4h4v16zM16 20v-8h4v8z', 'M3 20h18'],
  topLikers:    ['M8 11v9H4v-9zM8 11l4-8h1.5v5H19l-1 12H8', 'M11 15h4'],
  coin:         ['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z', 'M12 7v10M9.5 9.5h4a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 0 0 3h4'],
  viewers:      ['M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z', 'M12 9.5l2.5 2.5-2.5 2.5L9.5 12z'],
  announce:     ['M3 10v4h4l9 5V5L7 10zM18 9a4 4 0 0 1 0 6', 'M7 14l1 5h3l-1-4'],
  draw:         ['M5 3h14l2 2v14l-2 2H5l-2-2V5z', 'M8.5 8.5h.01M15.5 8.5h.01M12 12h.01M8.5 15.5h.01M15.5 15.5h.01'],
  likeStreak:   ['M12 3c1 4 5 6 5 11a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5.3 1.2.8 2 1.5 2.5C10.5 8.5 11.5 5.5 12 3z', 'M12 20a2.5 2.5 0 0 1-2.5-2.5c0-1.2.8-2 1.5-2.8.3.7.7 1 1 1.3.8-.7 1-1.7 1-2.5.8.9 1.5 2 1.5 4A2.5 2.5 0 0 1 12 20z'],
  alert:        ['M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5', 'M12 8l1.2 2.8L16 12l-2.8 1.2L12 16l-1.2-2.8L8 12l2.8-1.2z'],
  boss:         ['M7 9V4l3 3h4l3-3v5l2 2v4l-3 2v3H8v-3l-3-2v-4z', 'M9.5 12.5h1.5M13 12.5h1.5M11 17h2'],
  hype:         ['M13 2L5 13h6l-1 9 8-12h-6z', 'M3 8h3M18 16h3'],
  giftMenu:     ['M5 3h14v18H5z', 'M8 8h8M8 12h8M8 16h5'],
  giftVote:     ['M4 12h16v8H4zM8 12V7h8v5', 'M9 16l2 2 4-4'],
  race:         ['M5 21V4M5 4h12l-2 4 2 4H5', 'M9 4v8M13 4v8'],
  challenge:    ['M12 7a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM9 2h6', 'M12 11v4l2.5 1.5M12 7V4'],
  levels:       ['M12 3l8 4v6c0 4-3.5 7-8 8-4.5-1-8-4-8-8V7z', 'M8.5 12l3.5-3 3.5 3M8.5 15.5l3.5-3 3.5 3'],
  help:         ['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z', 'M9.5 9.5A2.5 2.5 0 0 1 12 7.5c1.5 0 2.5 1 2.5 2.2 0 1.6-2.5 1.8-2.5 3.8M12 16.5h.01'],
  reset:        ['M4 12a8 8 0 1 0 3-6.2L4 8', 'M4 3v5h5'],
  lock:         ['M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3', 'M12 15v2'],
  coinMatch:     ['M3 12a5 5 0 1 0 10 0 5 5 0 0 0-10 0zM11 12a5 5 0 1 0 10 0 5 5 0 0 0-10 0z', 'M9 12h6M13 10l2 2-2 2'],
  giftCannon:    ['M4 17l10-8 4 5-10 8z', 'M6 20a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M18 6l1-2M21 8l2-1M19 3h.01'],
  likeMountain:  ['M2 20l7-12 4 6 3-4 6 10z', 'M9 8V3l4 1.5L9 6'],
  socialRotator: ['M4 12a8 8 0 0 1 14-5M20 12a8 8 0 0 1-14 5', 'M18 3v4h-4M6 21v-4h4'],
  streamBuddies: ['M8 4h8v8H8zM9 12v6M15 12v6', 'M10.5 7.5h.01M13.5 7.5h.01M10 10h4'],
  crown:        ['M3 19h18l1.5-12-5.5 4.5-5-8-5 8L1.5 7z', 'M3 22h18M12 3.5v0'],
  boom:         ['M12 2l2.2 5.8L20 6l-2.2 5.2L23 14l-5.6.8L19 21l-5.2-3L12 23l-1.8-5-5.2 3 1.6-6.2L1 14l5.2-2.8L4 6l5.8 1.8z', 'M12 9.5l1 2.5-1 2.5-1-2.5z'],
  wheel:         ['M8 3h8l5 5v8l-5 5H8l-5-5V8zM12 3v18M3 12h18M6 6l12 12M18 6L6 18', 'M12 9.5l2.5 2.5-2.5 2.5L9.5 12z'],
  superFan:      ['M12 2l2.9 6.6 7.1.7-5.3 4.8 1.5 7-6.2-3.6-6.2 3.6 1.5-7L2 9.3l7.1-.7z', 'M12 7v5'],
  superFan:      ['M12 2l2.9 6.6 7.1.7-5.3 4.8 1.5 7-6.2-3.6-6.2 3.6 1.5-7L2 9.3l7.1-.7z', 'M12 7v5'],
  superFan:      ['M12 2l2.9 6.6 7.1.7-5.3 4.8 1.5 7-6.2-3.6-6.2 3.6 1.5-7L2 9.3l7.1-.7z', 'M12 7v5'],
  commands:      ['M4 5h16v11h-7l-4 4v-4H4z', 'M8 9.5l2.5 2.5L8 14.5M12.5 14.5H16'],
  nCmd:          ['M4 5h16v11h-7l-4 4v-4H4z', 'M8 9.5l2.5 2.5L8 14.5M12.5 14.5H16'],
  camFrame:      ['M3 5h18v14H3z', 'M7 9h10v6H7z'],
  nPreview:      ['M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z', 'M10.5 18.5h3'],
  // menu latéral
  nLive:        ['M6 5L3 12l3 7M18 5l3 7-3 7', 'M12 9.5l2.5 2.5-2.5 2.5L9.5 12z'],
  nDesign:      ['M4 20l1-4L16 5l3 3L8 19z', 'M13.5 7.5l3 3M4 20l4-1'],
  nSons:        ['M4 9h4l5-4v14l-5-4H4z', 'M16 9.5L17.5 12 16 14.5M18.5 7l2 5-2 5'],
  nScene:       ['M3 6h18v12H3z', 'M7 10h4v4H7z'],
  nTools:       ['M3 8h18v12H3zM9 8V5h6v3', 'M3 13h18M11 12v3h2v-3'],
  nHistory:     ['M4 4v16h16', 'M8 16v-4M12 16V8M16 16v-6'],
  nSettings:    ['M4 7h16M4 17h16', 'M8 4.5h2.5v5H8zM13.5 14.5H16v5h-2.5z'],
  nChat:        ['M4 5h16v11h-7l-4 4v-4H4z', 'M8 9.5h8M8 12.5h5'],
  soundOn:      ['M4 9h4l5-4v14l-5-4H4z', 'M16 9.5L17.5 12 16 14.5M18.5 7l2 5-2 5'],
  soundOff:     ['M4 9h4l5-4v14l-5-4H4z', 'M16 9l5 6M21 9l-5 6'],
  power:        ['M7 6a8 8 0 1 0 10 0', 'M12 3v9'],
};
// Renvoie le code SVG d'une icône (les formes sont écrites ici, jamais reçues de l'extérieur)
// Icônes en couleur (le reste du jeu est en traits) : le diamant est un diamant bleu à facettes partout (overlays, panneau, liste Design)
window.COLOR_ICONS = {
  goalDiamonds: '<svg class="ti %c" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10l5 6H2z" fill="#9fdcff"/><path d="M2 9h6l4 13z" fill="#3aa6ff"/><path d="M8 9h8l-4 13z" fill="#1b86f0"/><path d="M16 9h6L12 22z" fill="#1566cc"/><path d="M7 3l1 6M17 3l-1 6" stroke="#e6f6ff" stroke-opacity=".8" stroke-width=".9" fill="none"/><path d="M7 3h10l5 6-10 13L2 9z" fill="none" stroke="#0b3f94" stroke-width="1" stroke-linejoin="miter"/></svg>',
};
window.tabIcon = function (key, cls) {
  if (window.COLOR_ICONS[key]) return window.COLOR_ICONS[key].replace('%c', cls || '');
  const i = window.TAB_ICONS[key];
  if (!i) return '';
  return `<svg class="ti ${cls || ''}" viewBox="0 0 24 24" aria-hidden="true"><path d="${i[0]}"/><path class="a" d="${i[1]}"/></svg>`;
};
