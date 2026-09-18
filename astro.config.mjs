import { defineConfig } from 'astro/config';

export default defineConfig({
  // En CI, le workflow GitHub Pages surcharge site/base via
  // `astro build --site ... --base ...` (actions/configure-pages).
  // Valeur locale par défaut : domaine final prévu.
  site: 'https://astridboisgibault.fr',
});
