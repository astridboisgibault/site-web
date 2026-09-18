export interface Projet {
  slug: string;
  titre: string;
  annee: string;
  technique: string;
  texte: string;
  cover: string;
  galerie: { src: string; legende: string }[];
}

// Données factices — à remplacer par les vraies pièces d'Astrid.
// Images : picsum.photos avec seed stable (remplacer par photos locales ensuite).
const img = (seed: string, w = 1400, h = 1000) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const projets: Projet[] = [
  {
    slug: 'bols-terre-brute',
    titre: 'Bols terre brute',
    annee: '2024',
    technique: 'Grès chamotté, émail mat',
    texte:
      "Série de bols tournés en grès chamotté. Recherche autour de la matière brute, du geste visible et des surfaces mates. Pièces uniques pensées pour un usage quotidien.",
    cover: img('astrid-bols-cover'),
    galerie: [
      { src: img('astrid-bols-1'), legende: 'Bol terre brute, vue d’ensemble' },
      { src: img('astrid-bols-2'), legende: 'Détail émail mat' },
      { src: img('astrid-bols-3'), legende: 'Série de trois bols' },
    ],
  },
  {
    slug: 'vases-nuage',
    titre: 'Vases nuage',
    annee: '2023',
    technique: 'Faïence, engobe blanc',
    texte:
      "Vases aux formes souples et organiques, montés au colombin puis déformés. L’engobe blanc souligne les courbes, comme un nuage posé sur une étagère.",
    cover: img('astrid-nuage-cover'),
    galerie: [
      { src: img('astrid-nuage-1'), legende: 'Vase nuage n°1' },
      { src: img('astrid-nuage-2'), legende: 'Vase nuage n°2, détail' },
    ],
  },
  {
    slug: 'installation-rivage',
    titre: 'Rivage — installation',
    annee: '2024',
    technique: 'Grès, bois flotté, installation in situ',
    texte:
      "Installation présentée en galerie : une trentaine de pièces évoquant galets et coquillages, disposées au sol comme une ligne de marée. Projet collectif avec deux autres céramistes (données factices).",
    cover: img('astrid-rivage-cover'),
    galerie: [
      { src: img('astrid-rivage-1'), legende: 'Vue d’installation' },
      { src: img('astrid-rivage-2'), legende: 'Détail galets' },
      { src: img('astrid-rivage-3'), legende: 'Vue de côté' },
      { src: img('astrid-rivage-4'), legende: 'Détail bois flotté' },
    ],
  },
  {
    slug: 'assiettes-herbier',
    titre: 'Assiettes herbier',
    annee: '2022',
    technique: 'Porcelaine, empreinte végétale',
    texte:
      "Assiettes en porcelaine marquées d’empreintes de feuilles ramassées en promenade. Chaque pièce est unique, tirage d’un herbier d’atelier.",
    cover: img('astrid-herbier-cover'),
    galerie: [
      { src: img('astrid-herbier-1'), legende: 'Assiette feuille de chêne' },
      { src: img('astrid-herbier-2'), legende: 'Assiette fougère' },
    ],
  },
  {
    slug: 'totems-jardin',
    titre: 'Totems de jardin',
    annee: '2023',
    technique: 'Grès, cuisson haute température',
    texte:
      "Pièces verticales empilées, pensées pour l’extérieur. Le grès haute température résiste au gel. Formes simples, rythmées, qui ponctuent un jardin.",
    cover: img('astrid-totem-cover'),
    galerie: [
      { src: img('astrid-totem-1'), legende: 'Totem n°1, jardin' },
      { src: img('astrid-totem-2'), legende: 'Détail empilement' },
      { src: img('astrid-totem-3'), legende: 'Totem n°2' },
    ],
  },
  {
    slug: 'tasses-matinales',
    titre: 'Tasses matinales',
    annee: '2025',
    technique: 'Grès, émail brillant intérieur',
    texte:
      "Petite série de tasses à café, anses fines, intérieur émaillé coloré. Pièces du quotidien, vendues en série limitée (exemple factice).",
    cover: img('astrid-tasses-cover'),
    galerie: [
      { src: img('astrid-tasses-1'), legende: 'Tasse bleue, anse fine' },
      { src: img('astrid-tasses-2'), legende: 'Duo de tasses' },
    ],
  },
];

export const getProjet = (slug: string) => projets.find((p) => p.slug === slug);
