/**
 * ILUSTRASI CADANGAN
 * Dipakai otomatis bila foto asli belum ada di src/assets/foto/.
 * Anda tidak perlu mengubah file ini.
 */

export type Adegan =
  | 'walk'
  | 'boat'
  | 'seedling'
  | 'edu'
  | 'nursery'
  | 'sunset'
  | 'bird'
  | 'food'
  | 'umum';

export type Bentuk = 'botol' | 'kotak' | 'kantong' | 'toples' | 'kain';

/** Satu pohon mangrove sederhana dengan akar tunjang. */
function pohon(x: number, y: number, s: number, daun: string, akar: string): string {
  let r = '';
  const ks = [-1, -0.6, -0.2, 0.25, 0.65, 1];
  for (const k of ks) {
    r += `<path d="M${x + k * 4 * s} ${y - 42 * s} Q${x + k * 24 * s} ${y - 20 * s} ${x + k * 32 * s} ${y}" stroke="${akar}" stroke-width="${3 * s}" fill="none" stroke-linecap="round"/>`;
  }
  r += `<rect x="${x - 3 * s}" y="${y - 72 * s}" width="${6 * s}" height="${34 * s}" fill="${akar}"/>`;
  r += `<circle cx="${x}" cy="${y - 78 * s}" r="${28 * s}" fill="${daun}"/>`;
  r += `<circle cx="${x - 22 * s}" cy="${y - 64 * s}" r="${20 * s}" fill="${daun}"/>`;
  r += `<circle cx="${x + 24 * s}" cy="${y - 66 * s}" r="${22 * s}" fill="${daun}"/>`;
  return r;
}

/** Garis riak air. */
function ombak(y: number, warna: string, n: number, w: number, h: number): string {
  let d = '';
  for (let i = 0; i < n; i++) {
    const x = (i * 97 + 30) % w;
    const yy = y + ((i * 23) % h);
    d += `<path d="M${x} ${yy} q10 -5 20 0 t20 0" stroke="${warna}" stroke-width="2" fill="none" opacity=".55" stroke-linecap="round"/>`;
  }
  return d;
}

const LANGIT: Record<string, [string, string]> = {
  umum: ['#BFE6E0', '#EAF6EC'],
  walk: ['#CFEAD9', '#F1F8EA'],
  boat: ['#9FD5DC', '#E6F4EE'],
  sunset: ['#F6B15C', '#FBE3B3'],
  edu: ['#D7EBE2', '#F1F8F1'],
  seedling: ['#CBE6DA', '#EEF7EC'],
  bird: ['#BFDDE8', '#EAF4F0'],
  food: ['#E8E2CC', '#F6F1DE'],
  nursery: ['#CFE8D2', '#EDF7E7'],
};

/** Pemandangan 400x300 untuk kartu destinasi. */
export function ilustrasiAdegan(jenis: Adegan, uid: string, alt: string): string {
  const W = 400;
  const H = 300;
  const [atas, bawah] = LANGIT[jenis] ?? LANGIT.umum;
  const gid = `lg-${uid}`;
  let daun = '#2E7D52';
  const daun2 = '#1F6B4A';
  let akar = '#5A3F2C';
  let air = '#4E9DAF';
  if (jenis === 'sunset') {
    air = '#D97A45';
    daun = '#1E4B3E';
    akar = '#2B2A22';
  }
  let o = `<defs><linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${atas}"/><stop offset="1" stop-color="${bawah}"/></linearGradient></defs>`;
  o += `<rect width="${W}" height="${H}" fill="url(#${gid})"/>`;
  const senja = jenis === 'sunset';
  o += `<circle cx="${senja ? 250 : 310}" cy="${senja ? 170 : 70}" r="${senja ? 46 : 26}" fill="${senja ? '#FFF1C4' : '#FFF6D8'}" opacity=".95"/>`;
  const cakrawala = 170;
  o += `<g opacity=".6">${pohon(60, cakrawala, 0.7, daun2, akar)}${pohon(150, cakrawala, 0.55, daun2, akar)}${pohon(350, cakrawala, 0.65, daun2, akar)}</g>`;
  o += `<rect y="${cakrawala}" width="${W}" height="${H - cakrawala}" fill="${air}"/>`;
  o += ombak(cakrawala + 12, '#fff', 9, W, 110);

  if (jenis === 'walk') {
    o += '<path d="M-10 250 L410 215 L410 232 L-10 268Z" fill="#8B6A4A"/><path d="M-10 268 L410 232 L410 238 L-10 274Z" fill="#5A3F2C"/>';
    for (let i = 0; i < 9; i++) {
      o += `<path d="M${i * 46} ${262 - i * 4} L${i * 46 + 8} ${226 - i * 4}" stroke="#5A3F2C" stroke-width="3"/>`;
    }
    o += pohon(90, 205, 1.1, daun, akar) + pohon(330, 200, 1.2, daun, akar);
  } else if (jenis === 'boat') {
    o += pohon(70, 205, 1.2, daun, akar) + pohon(345, 200, 1.1, daun, akar);
    o += '<path d="M140 232 L270 232 L252 258 L158 258Z" fill="#E8A33D"/><rect x="200" y="196" width="4" height="36" fill="#5A3F2C"/><path d="M204 198 L242 224 L204 224Z" fill="#fff"/>';
    o += '<path d="M120 262 q20 -6 40 0 t40 0 t40 0 t40 0 t40 0" stroke="#fff" stroke-width="2.5" fill="none" opacity=".7"/>';
  } else if (jenis === 'seedling') {
    o += `<rect y="222" width="${W}" height="80" fill="#6B4E35"/><rect y="222" width="${W}" height="8" fill="#7A5A3E"/>`;
    for (let j = 0; j < 5; j++) {
      const x = 60 + j * 70;
      o += `<path d="M${x} 222 v-34" stroke="#3E8C5A" stroke-width="4" stroke-linecap="round"/>`;
      o += `<ellipse cx="${x - 9}" cy="190" rx="10" ry="5" fill="#4CB985" transform="rotate(-25 ${x - 9} 190)"/>`;
      o += `<ellipse cx="${x + 9}" cy="187" rx="10" ry="5" fill="#4CB985" transform="rotate(25 ${x + 9} 187)"/>`;
    }
    o += pohon(340, 200, 0.9, daun, akar);
  } else if (jenis === 'edu') {
    o += '<rect x="60" y="120" width="280" height="130" rx="8" fill="#fff" opacity=".9"/><rect x="60" y="120" width="280" height="130" rx="8" fill="none" stroke="#1F6B4A" stroke-width="3"/>';
    o += '<path d="M90 225 q40 -60 60 -10 t60 -20 t60 8" stroke="#22788D" stroke-width="4" fill="none"/><circle cx="150" cy="170" r="16" fill="#4CB985"/><rect x="147" y="178" width="6" height="26" fill="#5A3F2C"/><path d="M240 160 h70 M240 178 h55 M240 196 h62" stroke="#9DB5AD" stroke-width="5" stroke-linecap="round"/>';
  } else if (jenis === 'nursery') {
    o += `<rect y="210" width="${W}" height="90" fill="#6B4E35"/>`;
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 6; c++) {
        const px = 42 + c * 58 + (r % 2) * 20;
        const py = 222 + r * 22;
        o += `<path d="M${px - 12} ${py} h24 l-4 18 h-16Z" fill="#2B2A22"/>`;
        o += `<path d="M${px} ${py} v-24" stroke="#3E8C5A" stroke-width="3.5" stroke-linecap="round"/>`;
        o += `<ellipse cx="${px - 7}" cy="${py - 24}" rx="8" ry="4" fill="#4CB985" transform="rotate(-25 ${px - 7} ${py - 24})"/>`;
        o += `<ellipse cx="${px + 7}" cy="${py - 26}" rx="8" ry="4" fill="#4CB985" transform="rotate(25 ${px + 7} ${py - 26})"/>`;
      }
    }
  } else if (jenis === 'sunset') {
    o += pohon(110, 215, 1.5, daun, akar) + pohon(320, 205, 1.2, daun, akar);
  } else if (jenis === 'bird') {
    o += pohon(90, 205, 1.2, daun, akar) + pohon(330, 205, 1.1, daun, akar);
    o += '<path d="M170 100 q12 -14 24 0 q12 -14 24 0" stroke="#10302B" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M240 70 q9 -10 18 0 q9 -10 18 0" stroke="#10302B" stroke-width="3" fill="none" stroke-linecap="round"/>';
    o += '<g transform="translate(200 225)"><ellipse rx="20" ry="11" fill="#fff"/><circle cx="20" cy="-8" r="8" fill="#fff"/><path d="M27 -8 l14 3 l-14 3Z" fill="#E8A33D"/><path d="M-4 11 v22 M6 11 v22" stroke="#E8A33D" stroke-width="3" stroke-linecap="round"/></g>';
  } else if (jenis === 'food') {
    o += `<rect y="200" width="${W}" height="100" fill="#8B6A4A"/><ellipse cx="200" cy="250" rx="120" ry="34" fill="#fff"/><ellipse cx="200" cy="248" rx="92" ry="24" fill="#F3E3B8"/><path d="M150 245 q30 -30 60 0 q12 12 -10 16 h-40 q-22 -4 -10 -16Z" fill="#E88B4A"/><circle cx="250" cy="245" r="10" fill="#4CB985"/><path d="M120 210 h28 M252 208 h30" stroke="#fff" stroke-width="3"/>`;
    o += pohon(60, 190, 0.8, daun, akar);
  } else {
    o += pohon(120, 215, 1.4, daun, akar) + pohon(300, 210, 1.2, daun, akar);
  }
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${alt}">${o}</svg>`;
}

/** Ilustrasi besar di bagian atas halaman. */
export function ilustrasiHero(): string {
  const W = 560;
  const H = 430;
  let o =
    '<defs><linearGradient id="lg-hero" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#124A43"/><stop offset=".7" stop-color="#2A7F7A"/><stop offset="1" stop-color="#F0B252" stop-opacity=".55"/></linearGradient></defs>';
  o += `<rect width="${W}" height="${H}" fill="url(#lg-hero)"/><circle cx="410" cy="200" r="58" fill="#FFE9B0"/>`;
  o += `<g opacity=".55">${pohon(70, 250, 0.9, '#0B3530', '#0B2A26')}${pohon(200, 250, 0.7, '#0B3530', '#0B2A26')}${pohon(470, 250, 0.8, '#0B3530', '#0B2A26')}</g>`;
  o += `<rect y="250" width="${W}" height="${H - 250}" fill="#0F5A62"/>${ombak(262, '#CFEFEA', 12, W, 150)}`;
  o += `<rect y="250" width="${W}" height="3" fill="#F0B252" opacity=".6"/>`;
  o += pohon(150, 400, 2.6, '#1F6B4A', '#3B2A1E') + pohon(400, 400, 2.2, '#2E7D52', '#3B2A1E');
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMax meet" aria-hidden="true">${o}</svg>`;
}

/** Gambar produk 200x200. */
export function ilustrasiProduk(bentuk: Bentuk, warna: string, alt: string): string {
  const c = warna;
  let o = '<ellipse cx="100" cy="176" rx="62" ry="9" fill="#000" opacity=".12"/>';
  if (bentuk === 'botol') {
    o += `<rect x="84" y="30" width="32" height="20" rx="4" fill="#5A3F2C"/><path d="M84 50h32l14 22v96a8 8 0 0 1-8 8H78a8 8 0 0 1-8-8V72Z" fill="${c}"/><rect x="76" y="98" width="48" height="38" rx="4" fill="#fff" opacity=".9"/><circle cx="100" cy="117" r="9" fill="${c}"/>`;
  } else if (bentuk === 'kotak') {
    o += `<rect x="52" y="52" width="96" height="118" rx="8" fill="${c}"/><rect x="52" y="52" width="96" height="22" rx="8" fill="#000" opacity=".15"/><path d="M100 138c-18-2-26-16-24-32c18 0 26 14 24 32Z" fill="#fff" opacity=".9"/><path d="M100 138c0-16 8-30 24-32c2 16-6 30-24 32Z" fill="#fff" opacity=".65"/>`;
  } else if (bentuk === 'kantong') {
    o += `<path d="M58 42h84l8 128H50Z" fill="${c}"/><path d="M58 42h84l1 14H57Z" fill="#000" opacity=".15"/><path d="M70 60q30 14 60 0" stroke="#fff" stroke-width="2" fill="none" opacity=".6"/><ellipse cx="100" cy="112" rx="30" ry="20" fill="#fff" opacity=".9"/><path d="M84 112q16-16 32 0q-16 16-32 0Z" fill="${c}"/>`;
  } else if (bentuk === 'toples') {
    o += `<rect x="66" y="40" width="68" height="16" rx="4" fill="#5A3F2C"/><rect x="60" y="56" width="80" height="112" rx="10" fill="${c}"/><rect x="66" y="88" width="68" height="44" rx="4" fill="#fff" opacity=".9"/><path d="M78 110h44" stroke="${c}" stroke-width="5" stroke-linecap="round"/>`;
  } else {
    o += `<rect x="48" y="52" width="104" height="112" rx="6" fill="${c}"/><g stroke="#F3E3B8" stroke-width="3" fill="none" opacity=".85"><path d="M60 80q20-14 40 0t40 0"/><path d="M60 104q20-14 40 0t40 0"/><path d="M60 128q20-14 40 0t40 0"/></g>`;
  }
  return `<svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${alt}"><rect width="200" height="200" fill="var(--chip)"/>${o}</svg>`;
}
