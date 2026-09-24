/**
 * PAKET WISATA (Kluster 3)
 *
 * harga        : per orang, angka saja (65000, bukan 65.000)
 * minPeserta   : jumlah minimal peserta, dicek otomatis di form pemesanan
 * label        : tulisan penanda di atas kartu (mis. "Paling diminati"), kosongkan '' jika tidak perlu.
 *                Paket yang punya label menjadi pilihan awal di form.
 * termasuk     : daftar isi paket, satu baris per butir
 */
export type Paket = {
  id: string;
  nama: string;
  label: string;
  untuk: string;
  harga: number;
  minPeserta: number;
  durasi: string;
  termasuk: string[];
};

export const paket: Paket[] = [
  {
    id: 'pelajar',
    nama: 'Paket Pelajar',
    label: '',
    untuk: 'Rombongan sekolah dan kampus',
    harga: 65000,
    minPeserta: 20,
    durasi: '4 jam',
    termasuk: [
      'Tracking mangrove dengan pemandu',
      'Penanaman satu bibit per peserta',
      'Kelas singkat di Rumah Edukasi',
      'Snack dan air minum',
      'Lembar kegiatan untuk siswa',
    ],
  },
  {
    id: 'keluarga',
    nama: 'Paket Keluarga',
    label: 'Paling diminati',
    untuk: 'Keluarga dan teman, mulai 4 orang',
    harga: 95000,
    minPeserta: 4,
    durasi: '5 jam',
    termasuk: [
      'Susur muara dengan perahu',
      'Tracking mangrove dan pengamatan burung',
      'Penanaman satu bibit per peserta',
      'Makan siang olahan pesisir',
      'Foto kenangan di spot senja',
    ],
  },
  {
    id: 'komunitas',
    nama: 'Paket Komunitas & CSR',
    label: '',
    untuk: 'Instansi, komunitas, dan perusahaan',
    harga: 150000,
    minPeserta: 30,
    durasi: 'Seharian',
    termasuk: [
      'Semua kegiatan Paket Keluarga',
      'Workshop olahan mangrove',
      'Penanaman bibit dan papan nama donatur',
      'Sertifikat kegiatan',
      'Dokumentasi foto rombongan',
    ],
  },
];
