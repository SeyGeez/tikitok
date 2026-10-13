// ====================================================================================================
//   RÉGLAGES DU SITE : c'est le SEUL fichier à modifier pour changer un prix, un lien ou un contact.
//
//   Comment faire (sur GitHub, dans ton dépôt « tikitok ») :
//     1. clique sur ce fichier « config.js », puis sur le crayon (Edit this file) ;
//     2. change ce que tu veux entre les guillemets ou après les deux-points (garde les virgules et les guillemets) ;
//     3. clique sur « Commit changes » : le site se met à jour tout seul en une minute environ.
//   Les textes en vert (après //) sont juste des explications : ne les efface pas, ils ne gênent pas.
// ====================================================================================================
window.SITE_CONFIG = {

  // ---------- Prix ----------
  // Les prix, les « −50 % », « 6 mois offerts » et « soit 10 € par mois » se recalculent tout seuls partout sur le site.
  prix: {
    mensuel: 20,      // prix de l'abonnement par mois
    annuel: 120,      // prix de l'abonnement par an
    devise: '€',
  },

  // ---------- Bouton « Télécharger » ----------
  telechargement: {
    depot: 'SeyGeez/tikitok-lite',   // le dépôt GitHub où tu publies tes versions : le bouton donne toujours la dernière
    lienManuel: '',                  // si tu veux un autre lien (par exemple Google Drive), colle-le ici : il remplace celui de GitHub
  },

  // ---------- Bouton « Prendre l'abonnement » ----------
  abonnement: {
    lien: '',        // vide = le bouton mène à la section « Paiement » du site. Sinon : un lien (formulaire, page de paiement…)
  },

  // ---------- Page « Contactez-nous » ----------
  // Pour retirer un contact, vide-le (guillemets vides) ; pour en retirer un de la liste TikTok, efface sa ligne entière.
  contact: {
    email: 'klptypro@gmail.com',
    tiktok: [
      { nom: 'TheKlpty', compte: 'TheKlpty' },                       // « compte » = ce qui vient après le @
      { nom: 'Prince', compte: 'user4992772884992773v2' },
    ],
    pseudoDiscord: '',               // ton pseudo Discord personnel (vide = non affiché)
    serveurDiscordBientot: true,     // true = affiche « un serveur Discord est en cours de création » ; false = masque ce message
    lienServeurDiscord: '',          // quand le serveur existe : colle ici son lien d'invitation (https://discord.gg/…) : un bouton « Rejoindre » apparaît
  },

  // ---------- Bandeau d'annonce tout en haut du site ----------
  // Pour annoncer quelque chose (nouvelle version, promo, serveur Discord ouvert…). Vide = aucun bandeau.
  annonce: {
    fr: '',
    en: '',
  },

  // ---------- Thème Halloween ----------
  // 'auto' = actif du 1er octobre au 2 novembre ; 'oui' = toujours actif ; 'non' = jamais actif par défaut
  // (chaque visiteur peut quand même l'activer ou le couper avec la citrouille)
  halloween: 'auto',
};
