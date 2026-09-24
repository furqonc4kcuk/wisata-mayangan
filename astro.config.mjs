// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// // https://astro.build/config
// export default defineConfig({
//   // GANTI dengan alamat website Anda setelah punya domain (dipakai untuk SEO).
//   site: 'https://mangrove-mayangan.example.com',
//   vite: {
//     plugins: [tailwindcss()],
//   },
// });
export default defineConfig({
  // Ganti dengan URL GitHub Pages Anda
  site: 'https://github.io', 
  // HAPUS atau JANGAN gunakan baris 'base' di bawah jika nama repositori Anda adalah 'username.github.io'
  // TAPI jika nama repositori Anda bebas (misal: 'my-portfolio'), isi seperti di bawah:
  base: '/wisata-mayangan', 
});