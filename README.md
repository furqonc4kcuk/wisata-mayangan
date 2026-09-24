# Website Wisata Edukasi Mangrove Mayangan

Landing page dengan tiga kluster: **Destinasi** (katalog wisata), **Oleh-oleh** (produk khas), dan **Paket wisata** (bisa dipesan langsung lewat WhatsApp). Dibuat dengan Astro dan Tailwind CSS, hasil akhirnya HTML statis yang ringan dan cepat.

## 1. Pasang alat yang dibutuhkan (sekali saja)

1. **Node.js versi LTS** (20 atau lebih baru) dari https://nodejs.org . Pasang seperti aplikasi biasa.
2. **Visual Studio Code** dari https://code.visualstudio.com .
3. Cek Node.js sudah terpasang: buka Terminal (atau Command Prompt di Windows), ketik `node -v`. Jika muncul nomor versi, berarti berhasil.

## 2. Buka proyek di VS Code

1. Ekstrak file zip proyek ini ke folder pilihan Anda, misalnya `Documents/mangrove-mayangan`.
2. Buka VS Code, pilih **File > Open Folder**, lalu pilih folder `mangrove-mayangan` tadi.
3. Jika VS Code menawarkan **"Install recommended extensions"**, klik **Install**. Dua ekstensi yang dipakai: *Astro* dan *Tailwind CSS IntelliSense*. Keduanya membuat kode berwarna dan memberi saran nama kelas.

## 3. Jalankan di komputer sendiri

Di VS Code, buka terminal lewat menu **Terminal > New Terminal**, lalu ketik satu per satu:

```bash
npm install
npm run dev
```

- `npm install` cukup dijalankan sekali (butuh internet, memakan beberapa menit).
- `npm run dev` menjalankan website. Buka alamat **http://localhost:4321** di browser.
- Setiap kali Anda menyimpan file (Ctrl+S), tampilan di browser ikut berubah otomatis.
- Untuk menghentikan, tekan **Ctrl+C** di terminal.

## 4. Apa yang diedit, di file mana

| Yang ingin diubah | Buka file |
| --- | --- |
| Nomor WhatsApp, nama situs, lokasi, jam buka, deskripsi Google | `src/config/site.ts` |
| Daftar destinasi (nama, deskripsi, durasi) | `src/data/destinasi.ts` |
| Daftar oleh-oleh (nama, harga, satuan) | `src/data/produk.ts` |
| Paket wisata (harga, minimal peserta, isi paket) | `src/data/paket.ts` |
| Warna seluruh halaman (terang dan gelap) | `src/styles/global.css`, bagian paling atas |
| Judul besar dan kalimat pembuka | `src/components/Hero.astro` |
| Menu di bagian atas | `src/components/Header.astro` |
| Alamat website untuk SEO | `astro.config.mjs` (baris `site`) |

**Ganti dulu nomor WhatsApp** di `src/config/site.ts` (baris `whatsapp`). Formatnya diawali `62`, tanpa `+` dan tanpa `0` di depan, misalnya `6281234567890`. Selama masih nomor contoh, pesanan pengunjung tidak sampai ke Anda.

Semua nama, harga, dan isi paket di proyek ini adalah **contoh**. Ganti dengan data sebenarnya, lalu hapus atau kosongkan tulisan `catatanContoh` di `site.ts` agar catatan "data contoh" di halaman hilang.

### Menambah destinasi, produk, atau paket

Buka file datanya, salin satu blok `{ ... }` lengkap dengan koma di ujungnya, tempel di bawahnya, lalu ubah isinya. Pastikan `id` tidak sama dengan blok lain. Jumlah di bagian atas halaman ("8 titik wisata", dst.) dihitung otomatis.

## 5. Memasang foto asli

Selama foto belum ada, halaman menampilkan ilustrasi. Untuk memakai foto:

1. Simpan foto di folder:
   - `src/assets/foto/destinasi/` untuk destinasi
   - `src/assets/foto/produk/` untuk oleh-oleh
2. Beri nama file **sama persis dengan `id`** di file datanya. Contoh: destinasi dengan `id: 'tracking'` memakai `tracking.jpg`; produk dengan `id: 'sirup-pidada'` memakai `sirup-pidada.jpg`.
3. Format yang dikenali: `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`. Disarankan lebar minimal 1200 piksel, orientasi mendatar.

Tidak perlu mengecilkan foto sendiri. Saat website dibuat, Astro otomatis membuat beberapa ukuran dan mengubahnya ke format ringan. Foto akan dipotong otomatis mengisi kotak (rasio 4:3 untuk destinasi, 16:10 untuk produk).

## 6. Membuat versi siap online

```bash
npm run build
```

Hasilnya ada di folder `dist/`. Untuk mencobanya seperti kondisi sebenarnya:

```bash
npm run preview
```

## 7. Menayangkan ke internet (hosting gratis)

Karena hasilnya situs statis, semua layanan berikut cocok dan gratis untuk kebutuhan seperti ini:

- **Cloudflare Pages** atau **Netlify**: unggah proyek ke GitHub, sambungkan repositori di layanan tersebut, lalu isi *Build command* `npm run build` dan *Output directory* `dist`.
- **GitHub Pages**: gunakan Astro action resmi (panduan di https://docs.astro.build/id/guides/deploy/github/ ).

Setelah punya alamat atau domain, ubah nilai `site` di `astro.config.mjs` ke alamat tersebut.

## 8. Masalah yang sering muncul

- **`npm` tidak dikenali**: Node.js belum terpasang atau terminal belum dibuka ulang setelah memasangnya.
- **Halaman tidak berubah setelah menyimpan**: pastikan `npm run dev` masih berjalan di terminal, lalu muat ulang browser (F5).
- **Foto tidak muncul**: periksa nama file sama persis dengan `id` (huruf kecil, tanpa spasi) dan berada di folder yang benar.
- **Peringatan di VS Code pada file `global.css` (`@theme`, `@import`)**: abaikan, itu sintaks Tailwind versi 4. Pengaturan di `.vscode/settings.json` sudah menekannya.
- **Perubahan di `astro.config.mjs` atau `package.json` tidak terbaca**: hentikan (Ctrl+C) lalu jalankan `npm run dev` lagi.

## Struktur folder

```
mangrove-mayangan/
├─ public/                 favicon dan file statis
├─ src/
│  ├─ assets/foto/         taruh foto asli di sini (destinasi/ dan produk/)
│  ├─ components/          potongan halaman (Hero, Destinasi, OlehOleh, Paket, Pesan, dst.)
│  ├─ config/site.ts       pengaturan umum, nomor WhatsApp
│  ├─ data/                daftar destinasi, produk, paket
│  ├─ layouts/Base.astro   kerangka HTML dan tag SEO
│  ├─ lib/                 fungsi bantu dan ilustrasi cadangan
│  ├─ pages/index.astro    halaman utama (menyusun semua komponen)
│  └─ styles/global.css    warna, huruf, gaya tombol
├─ astro.config.mjs
└─ package.json
```
