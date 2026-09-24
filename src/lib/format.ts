/** Format angka menjadi rupiah, contoh: 28000 -> "Rp28.000" */
export const rupiah = (n: number): string => 'Rp' + Math.round(n).toLocaleString('id-ID');

/** Membuat tautan WhatsApp berisi pesan yang sudah tersusun. */
export const linkWA = (nomor: string, teks: string): string =>
  `https://wa.me/${nomor}?text=${encodeURIComponent(teks)}`;

/** Aman untuk menaruh JSON di dalam tag <script>. */
export const jsonAman = (data: unknown): string =>
  JSON.stringify(data).replace(/</g, '\\u003c');
