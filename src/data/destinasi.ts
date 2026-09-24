import type { Adegan } from '../lib/ilustrasi';

/**
 * KATALOG DESTINASI (Kluster 1)
 *
 * Untuk menambah destinasi: salin satu blok { ... } lalu ubah isinya.
 * Untuk memakai foto asli: simpan foto di  src/assets/foto/destinasi/
 * dengan nama yang SAMA dengan `id` di bawah, contoh: tracking.jpg
 * Jika foto belum ada, halaman menampilkan ilustrasi sesuai `adegan`.
 *
 * kategori : bebas, tombol filter dibuat otomatis dari kategori yang ada
 * adegan   : jenis ilustrasi cadangan -> walk | boat | seedling | edu | nursery | sunset | bird | food | umum
 */
export type Destinasi = {
  id: string;
  kategori: string;
  nama: string;
  adegan: Adegan;
  durasi: string;
  ringkas: string;
  deskripsi: string;
};

export const destinasi: Destinasi[] = [
  {
    id: 'tracking',
    kategori: 'Jelajah',
    nama: 'Jembatan Tracking Mangrove',
    adegan: 'walk',
    durasi: '45–60 menit',
    ringkas: 'Berjalan di atas jembatan kayu menembus rimbun akar tunjang dan akar napas.',
    deskripsi:
      'Berjalan di atas jembatan kayu menembus rimbun akar tunjang dan akar napas. Pemandu menjelaskan jenis-jenis mangrove di sepanjang jalur.',
  },
  {
    id: 'perahu',
    kategori: 'Jelajah',
    nama: 'Susur Muara dengan Perahu',
    adegan: 'boat',
    durasi: '60 menit',
    ringkas: 'Menyusuri alur muara dan tepian hutan mangrove dari atas perahu.',
    deskripsi:
      'Menyusuri alur muara dan tepian hutan mangrove dari atas perahu. Waktu terbaik saat air pasang, jam berangkat disesuaikan pengelola.',
  },
  {
    id: 'bibit',
    kategori: 'Edukasi',
    nama: 'Penanaman Bibit Mangrove',
    adegan: 'seedling',
    durasi: '45 menit',
    ringkas: 'Menanam propagul di lahan yang sudah ditentukan.',
    deskripsi:
      'Menanam propagul di lahan yang sudah ditentukan. Setiap peserta belajar cara memilih bibit dan menanamnya agar tumbuh.',
  },
  {
    id: 'rumah-edukasi',
    kategori: 'Edukasi',
    nama: 'Rumah Edukasi Mangrove',
    adegan: 'edu',
    durasi: '30–45 menit',
    ringkas: 'Ruang belajar tentang fungsi mangrove, lengkap dengan alat peraga.',
    deskripsi:
      'Ruang belajar tentang fungsi mangrove sebagai penahan abrasi, tempat pemijahan ikan, dan penyerap karbon, lengkap dengan alat peraga.',
  },
  {
    id: 'persemaian',
    kategori: 'Edukasi',
    nama: 'Kebun Persemaian',
    adegan: 'nursery',
    durasi: '30 menit',
    ringkas: 'Melihat tahap pembibitan dari propagul hingga siap tanam.',
    deskripsi:
      'Melihat tahap pembibitan dari propagul hingga siap tanam, dan ikut mengisi polybag bersama pengelola.',
  },
  {
    id: 'senja',
    kategori: 'Panorama',
    nama: 'Spot Senja Pesisir',
    adegan: 'sunset',
    durasi: 'Bebas',
    ringkas: 'Hamparan tambak dan siluet mangrove yang berubah warna saat matahari turun.',
    deskripsi:
      'Hamparan tambak dan siluet mangrove yang berubah warna saat matahari turun. Cocok untuk foto keluarga dan rombongan.',
  },
  {
    id: 'burung',
    kategori: 'Panorama',
    nama: 'Pengamatan Burung Air',
    adegan: 'bird',
    durasi: '40 menit',
    ringkas: 'Mengamati burung air yang singgah di tepian mangrove.',
    deskripsi:
      'Mengamati burung air yang singgah di tepian mangrove. Datang pagi hari untuk peluang melihat lebih banyak.',
  },
  {
    id: 'kuliner',
    kategori: 'Kuliner',
    nama: 'Warung Olahan Pesisir',
    adegan: 'food',
    durasi: 'Bebas',
    ringkas: 'Makan siang dengan olahan ikan dan udang tangkapan lokal.',
    deskripsi:
      'Makan siang dengan olahan ikan dan udang tangkapan lokal, serta minuman dari buah mangrove.',
  },
];
