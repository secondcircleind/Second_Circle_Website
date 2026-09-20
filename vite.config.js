import { copyFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function spaFallbackFiles() {
  return {
    name: 'spa-fallback-files',
    closeBundle() {
      const index = resolve(import.meta.dirname, 'dist/index.html');
      if (existsSync(index)) {
        copyFileSync(index, resolve(import.meta.dirname, 'dist/404.html'));
      }
    },
  };
}

export default defineConfig({
  appType: 'spa',
  plugins: [react(), spaFallbackFiles()],
});
