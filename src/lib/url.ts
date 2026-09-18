// Préfixe un chemin interne avec la base du site.
// En local BASE_URL vaut '/', en CI GitHub Pages '/site-web/'.
export const withBase = (path: string): string =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
