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
    id: 'sirup-pidada',
    nama: 'Sirup Pidada',
    deskripsi: 'Sari buah pidada (Sonneratia) yang segar dan sedikit asam.',
    harga: 28000,
    satuan: 'botol 350 ml',
    bentuk: 'botol',
    warna: '#B04A5A',
  },
  {
    id: 'teh-mangrove',
    nama: 'Teh Daun Mangrove',
    deskripsi: 'Seduhan herbal dari daun mangrove pilihan, tanpa pemanis.',
    harga: 22000,
    satuan: 'kotak isi 20',
    bentuk: 'kotak',
    warna: '#3E8C5A',
  },
  {
    id: 'kerupuk-ikan',
    nama: 'Kerupuk Ikan Pesisir',
    deskripsi: 'Kerupuk gurih dari ikan tangkapan nelayan setempat.',
    harga: 18000,
    satuan: 'bungkus 250 g',
    bentuk: 'kantong',
    warna: '#D99A3A',
  },
  {
    id: 'terasi-rebon',
    nama: 'Terasi Udang Rebon',
    deskripsi: 'Terasi khas pesisir utara, aroma pekat dan bumbu dapur andalan.',
    harga: 15000,
    satuan: 'bungkus 100 g',
    bentuk: 'toples',
    warna: '#8A4B3A',
  },
  {
    id: 'stik-bandeng',
    nama: 'Stik Bandeng',
    deskripsi: 'Camilan renyah dari daging bandeng tambak Mayangan.',
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
