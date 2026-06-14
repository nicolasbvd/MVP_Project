import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  // Doit correspondre EXACTEMENT au nom du repo GitHub.
  // Repo "MVP_Project" => site sur https://<user>.github.io/MVP_Project/
  base: '/MVP_Project/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        inscription: resolve(root, 'inscription.html'),
        tarifs: resolve(root, 'tarifs.html'),
      },
    },
  },
});