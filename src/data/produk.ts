import type { Bentuk } from '../lib/ilustrasi';

/**
 * OLEH-OLEH KHAS (Kluster 2)
 *
 * Untuk menambah produk: salin satu blok { ... } lalu ubah isinya.
 * Foto asli: simpan di  src/assets/foto/produk/  dengan nama sama dengan `id`
 * (contoh: sirup-pidada.jpg). Tanpa foto, tampil ilustrasi sesuai `bentuk`.
 *
 * harga  : angka saja, tanpa titik (28000, bukan 28.000)
 * bentuk : botol | kotak | kantong | toples | kain
 * warna  : kode warna ilustrasi cadangan (hanya dipakai bila belum ada foto)
 */
export type Produk = {
  id: string;
  nama: string;
  deskripsi: string;
  harga: number;
  satuan: string;
  bentuk: Bentuk;
  warna: string;
};

export const produk: Produk[] = [
  {
    id: 'dodol',
    nama: 'Dodol Mangrove',
    deskripsi: 'Dodol dari Buah Mangrove Alami dan Manis',
    harga: 18000,
    satuan: 'Mini Pack 200 gram',
    bentuk: 'botol',
    warna: '#B04A5A',
  },
  {
    id: 'abon_top',
    nama: 'Abon Tongkol',
    deskripsi: 'Abon dari Ikan Tongkol yang langsung ditangkap diperairan Mayangan dengan cita rasa khas, gurih dan renyah',
    harga: 22000,
    satuan: 'Botol',
    bentuk: 'kotak',
    warna: '#3E8C5A',
  },
  {
    id: 'kripik',
    nama: 'Kerupuk Ikan Pesisir',
    deskripsi: 'Kerupuk gurih dari ikan tangkapan nelayan setempat.',
    harga: 18000,
    satuan: 'bungkus 250 g',
    bentuk: 'kantong',
    warna: '#D99A3A',
  },
  {
    id: 'abon_tongkol',
    nama: 'Abon dari Ikan Tongkol Lokal Mayangan',
    deskripsi: 'Abon Tongkol khas pesisir utara, aroma pekat dan bumbu dapur andalan.',
    harga: 15000,
    satuan: 'bungkus 100 g',
    bentuk: 'toples',
    warna: '#8A4B3A',
  },
  {
    id: 'stick',
    nama: 'Stik Mangrove',
    deskripsi: 'Camilan renyah dari Buah Mangrove Mayangan.',
    harga: 32000,
    satuan: 'toples 200 g',
    bentuk: 'toples',
    warna: '#C7803A',
  },
  {
    id: 'kain-mangrove',
    nama: 'Kain Pewarna Alami Mangrove',
    deskripsi: 'Kain dengan pewarna alami dari kulit batang mangrove.',
    harga: 85000,
    satuan: 'lembar',
    bentuk: 'kain',
    warna: '#8D5A3C',
  },
];
