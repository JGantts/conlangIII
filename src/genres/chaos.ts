export const onsets = [
  { phoneme: 'b', odds: 0 },
  { phoneme: 'bʷ', odds: 5 },
  { phoneme: 'ʃ', odds: 0 },
  { phoneme: 't͡ʃ', odds: 6 },
  { phoneme: 't͡ʃʷ', odds: 6 },
  { phoneme: 'ʒ', odds: 0 },
  { phoneme: 'd͡ʒ', odds: 6 },
  { phoneme: 'ʒʷ', odds: 6 },
  { phoneme: 'd', odds: 0 },
  { phoneme: 'f', odds: 0 },
  { phoneme: 'g', odds: 0 },
  { phoneme: 'gʷ', odds: 5 },
  { phoneme: 'x', odds: 4 },
  { phoneme: 'k', odds: 0 },
  { phoneme: 'kʷ', odds: 5 },
  { phoneme: 'l', odds: 0 },
  { phoneme: 'm', odds: 0 },
  { phoneme: 'mʷ', odds: 4 },
  { phoneme: 'n', odds: 0 },
  { phoneme: 'p', odds: 0 },
  { phoneme: 'pʷ', odds: 5 },
  { phoneme: 'ɹ', odds: 0 },
  { phoneme: 's', odds: 0 },
  { phoneme: 't', odds: 0 },
  { phoneme: 'ʔ', odds: 4 },
  { phoneme: 'w', odds: 0 },
  { phoneme: 'j', odds: 0 },
  { phoneme: 'z', odds: 0 },
  
  // Clusters (only found here)
  { phoneme: 'ʃm', odds: 7 },
  { phoneme: 'ʃn', odds: 7 },
  { phoneme: 'ʃp', odds: 7 },
  { phoneme: 'ʃpʷ', odds: 7 },
  { phoneme: 'ʃk', odds: 7 },
  { phoneme: 'ʃkʷ', odds: 7 },
  { phoneme: 'ʃʷ', odds: 7 },
  { phoneme: 'sm', odds: 7 },
  { phoneme: 'sn', odds: 7 },
  { phoneme: 'sp', odds: 7 },
  { phoneme: 'spʷ', odds: 7 },
  { phoneme: 'sk', odds: 7 },
  { phoneme: 'skʷ', odds: 7 },
  { phoneme: 'sʷ', odds: 7 },
];

export const codas = [
  // Keep codas complex too
  { phoneme: 'n', odds: 0 },
  { phoneme: 'ʃ', odds: 0 },
  { phoneme: 't͡ʃ', odds: 5 },
  { phoneme: 'ʒ', odds: 0 },
  { phoneme: 'd͡ʒ', odds: 5 },
  { phoneme: 'k', odds: 0 },
  { phoneme: 'l', odds: 0 },
  { phoneme: 'p', odds: 0 },
  { phoneme: 's', odds: 0 },
  { phoneme: 't', odds: 0 },
  { phoneme: 'ʃp', odds: 6 },
  { phoneme: 'ʃk', odds: 6 },
  { phoneme: 'sp', odds: 6 },
  { phoneme: 'sk', odds: 6 },
];

export const vowels = [
  // Keep all vowels but favor back vowels
  { phoneme: 'ɑ', odds: 10 },
  { phoneme: 'a', odds: 5 },
  { phoneme: 'e', odds: 5 },
  { phoneme: 'i', odds: 5 },
  { phoneme: 'o', odds: 10 },
  { phoneme: 'u', odds: 10 },
];

export const wordFinals = [
  { phoneme: 't', odds: 15 },
  { phoneme: 'k', odds: 20 },
  { phoneme: 'be', odds: 18 },
];

export const replacements = `
% i    e    a    ɑ    o    u
i iki  -    ja   jɑ   jo   ju
e -    ete  eja  ejɑ  ejo  eju
a +    +    -    +    +    +
ɑ +    +    +    ɑpɑ  +    +
o owi  owe  owa  +    oto oju
u wi   we   wæ   wa   wo  uju
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
  /wu/i,
  /tʔ/,
  /ʔt/,
  /ʔ$/,  
  /ʔ[^ʔ]*ʔ/,
  new RegExp(`(${vowels.map(v => v.phoneme).join('|')}){3}`, 'i'),
];