// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GANTI dengan alamat website Anda setelah punya domain (dipakai untuk SEO).
  site: 'https://mangrove-mayangan.example.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
