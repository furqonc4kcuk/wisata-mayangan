import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://furqonc4kcuk.github.io', // Ganti dengan username GitHub Anda
  base: '/wisata-mayangan',           // WAJIB menggunakan garis miring '/' di awal
  vite: {
    plugins: [tailwindcss()],
  },
});
