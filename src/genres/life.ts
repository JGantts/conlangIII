export const onsets = [
  // Keep only m, n, l, ɹ, w, j, p, t
  { phoneme: 'b', odds: 0 },
  { phoneme: 'bʷ', odds: 0 },
  { phoneme: 'ʃ', odds: 0 },
  { phoneme: 't͡ʃ', odds: 0 },
  { phoneme: 't͡ʃʷ', odds: 0 },
  { phoneme: 'ʒ', odds: 0 },
  { phoneme: 'd͡ʒ', odds: 0 },
  { phoneme: 'ʒʷ', odds: 0 },
  { phoneme: 'd', odds: 0 },
  { phoneme: 'f', odds: 0 },
  { phoneme: 'g', odds: 0 },
  { phoneme: 'gʷ', odds: 0 },
  { phoneme: 'x', odds: 0 },
  { phoneme: 'k', odds: 0 },
  { phoneme: 'kʷ', odds: 0 },
  { phoneme: 'l', odds: 10 },
  { phoneme: 'm', odds: 10 },
  { phoneme: 'mʷ', odds: 0 },
  { phoneme: 'n', odds: 10 },
  { phoneme: 'p', odds: 10 },
  { phoneme: 'pʷ', odds: 0 },
  { phoneme: 'ɹ', odds: 10 },
  { phoneme: 's', odds: 0 },
  { phoneme: 't', odds: 10 },
  { phoneme: 'ʔ', odds: 0 },
  { phoneme: 'w', odds: 10 },
  { phoneme: 'j', odds: 10 },
  { phoneme: 'z', odds: 0 },
  
  // All clusters zeroed out
  { phoneme: 'ʃm', odds: 0 },
  { phoneme: 'ʃn', odds: 0 },
  { phoneme: 'ʃp', odds: 0 },
  { phoneme: 'ʃpʷ', odds: 0 },
  { phoneme: 'ʃk', odds: 0 },
  { phoneme: 'ʃkʷ', odds: 0 },
  { phoneme: 'ʃʷ', odds: 0 },
  { phoneme: 'sm', odds: 0 },
  { phoneme: 'sn', odds: 0 },
  { phoneme: 'sp', odds: 0 },
  { phoneme: 'spʷ', odds: 0 },
  { phoneme: 'sk', odds: 0 },
  { phoneme: 'skʷ', odds: 0 },
  { phoneme: 'sʷ', odds: 0 },
];

export const codas = [
  // Only n, l, p, t allowed
  { phoneme: 'n', odds: 10 },
  { phoneme: 'ʃ', odds: 0 },
  { phoneme: 't͡ʃ', odds: 0 },
  { phoneme: 'ʒ', odds: 0 },
  { phoneme: 'd͡ʒ', odds: 0 },
  { phoneme: 'k', odds: 0 },
  { phoneme: 'l', odds: 10 },
  { phoneme: 'p', odds: 10 },
  { phoneme: 's', odds: 0 },
  { phoneme: 't', odds: 10 },
  { phoneme: 'ʃp', odds: 0 },
  { phoneme: 'ʃk', odds: 0 },
  { phoneme: 'sp', odds: 0 },
  { phoneme: 'sk', odds: 0 },
];

export const vowels = [
  // Only front vowels and 'a'
  { phoneme: 'ɑ', odds: 2 },
  { phoneme: 'a', odds: 10 },
  { phoneme: 'e', odds: 20 },
  { phoneme: 'i', odds: 20 },
  { phoneme: 'o', odds: 2 },
  { phoneme: 'u', odds: 2 },
];

export const wordFinals = [
  { phoneme: 'an', odds: 19 },
  { phoneme: 'en', odds: 21 },
  { phoneme: 'il', odds: 17 },
  { phoneme: 'el', odds: 20 },
  { phoneme: 'ulan', odds: 16 },
  { phoneme: 'ar', odds: 18 },
  { phoneme: 'ema', odds: 22 },
];

export const replacements = `
% i    e    a    ɑ    o    u
i ini  -    ja   jɑ   jo   ju
e -    eme  eja  ejɑ  ejo  eju
a +    +    -    +    +    +
ɑ +    +    +    ɑlɑ  +    +
o owi  owe  owa  +    olo oʔu
u wi   we   wæ   wa   wo  ulu
`;

export const bannedClusters: RegExp[] = [
  /^ʔ/i,
  /lj/i,
  /ɹj/i,
  /sj/i,
  /zj/i,
  /ʃj/i,
  /ʒj/i,
  /ʒ$/i,
  /d͡ʒ$/i,
  /wj/i,
  /ʷo/i,
  /ʷu/i,
  new RegExp(`(${vowels.map(v => v.phoneme).join('|')}){3}`, 'i'),
  
  // Newly added bans to avoid these harsh clusters anywhere:
  /ʃp/i,
  /ʃk/i,
  /sp/i,
  /sk/i,
  
  // You could add more if you find certain sequences too unpleasant
];