export const onsets = [
  { phoneme: 'b', odds: 15 },
  { phoneme: 'bʷ', odds: 4 },
  { phoneme: 'ʃ', odds: 12 },
  { phoneme: 't͡ʃ', odds: 3 },
  { phoneme: 't͡ʃʷ', odds: 1 },
  { phoneme: 'ʒ', odds: 4 },
  { phoneme: 'd͡ʒ', odds: 2 },
  { phoneme: 'ʒʷ', odds: 2 },
  { phoneme: 'd', odds: 18 },
  { phoneme: 'f', odds: 12 },
  { phoneme: 'g', odds: 14 },
  { phoneme: 'gʷ', odds: 3 },
  { phoneme: 'x', odds: 10 },
  { phoneme: 'k', odds: 20 },
  { phoneme: 'kʷ', odds: 1 },
  { phoneme: 'l', odds: 24 },
  { phoneme: 'm', odds: 26 },
  { phoneme: 'mʷ', odds: 2 },
  { phoneme: 'n', odds: 28 },
  { phoneme: 'p', odds: 30 },
  { phoneme: 'pʷ', odds: 2 },
  { phoneme: 'ɹ', odds: 29 },
  { phoneme: 's', odds: 33 },
  { phoneme: 't', odds: 34 },
  { phoneme: 'ʔ', odds: 15 },
  { phoneme: 'w', odds: 35 },
  { phoneme: 'j', odds: 36 },
  { phoneme: 'z', odds: 37 },
  { phoneme: 'ʃm', odds: 5 },
  { phoneme: 'ʃn', odds: 5 },
  { phoneme: 'ʃp', odds: 5 },
  { phoneme: 'ʃpʷ', odds: 5 },
  { phoneme: 'ʃk', odds: 5 },
  { phoneme: 'ʃkʷ', odds: 5 },
  { phoneme: 'ʃʷ', odds: 5 },
  { phoneme: 'sm', odds: 5 },
  { phoneme: 'sn', odds: 5 },
  { phoneme: 'sp', odds: 10 },
  { phoneme: 'spʷ', odds: 5 },
  { phoneme: 'sk', odds: 15 },
  { phoneme: 'skʷ', odds: 5 },
  { phoneme: 'sʷ', odds: 5 },
];

export const codas = [
  { phoneme: 'n', odds: 20 },
  { phoneme: 'ʃ', odds: 10 },
  { phoneme: 't͡ʃ', odds: 2 },
  { phoneme: 'ʒ', odds: 3 },
  { phoneme: 'd͡ʒ', odds: 2 },
  { phoneme: 'k', odds: 18 },
  { phoneme: 'l', odds: 17 },
  { phoneme: 'p', odds: 16 },
  { phoneme: 's', odds: 25 },
  { phoneme: 't', odds: 23 },
  { phoneme: 'ʃp', odds: 1 },
  { phoneme: 'ʃk', odds: 2 },
  { phoneme: 'sp', odds: 3 },
  { phoneme: 'sk', odds: 4 },
];

export const vowels = [
  { phoneme: 'ɑ', odds: 20 },
  { phoneme: 'a', odds: 18 },
  { phoneme: 'e', odds: 22 },
  { phoneme: 'i', odds: 20 },
  { phoneme: 'o', odds: 19 },
  { phoneme: 'u', odds: 17 },
];

export const wordFinals = [
  { phoneme: '', odds: 20 },
]

export const replacements = `
% i    e    a    ɑ    o    u
i iʔi  -    ja   jɑ   jo   ju
e -    eʔe  eja  ejɑ  ejo  eju
a +    +    aʔa  +    +    +
ɑ +    +    +    ɑʔɑ  +    +
o owi  owe  owa  +    oʔo oʔu
u wi   we   wæ   wa   wo  uʔu
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