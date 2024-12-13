export const onsets = [
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
  { phoneme: 'k', odds: 10 },
  { phoneme: 'kʷ', odds: 0 },
  { phoneme: 'l', odds: 0 },
  { phoneme: 'm', odds: 0 },
  { phoneme: 'mʷ', odds: 0 },
  { phoneme: 'n', odds: 0 },
  { phoneme: 'p', odds: 10 },
  { phoneme: 'pʷ', odds: 0 },
  { phoneme: 'ɹ', odds: 0 },
  { phoneme: 's', odds: 10 },
  { phoneme: 't', odds: 10 },
  { phoneme: 'ʔ', odds: 0 },
  { phoneme: 'w', odds: 0 },
  { phoneme: 'j', odds: 0 },
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
  { phoneme: 'n', odds: 0 },
  { phoneme: 'ʃ', odds: 0 },
  { phoneme: 't͡ʃ', odds: 0 },
  { phoneme: 'ʒ', odds: 0 },
  { phoneme: 'd͡ʒ', odds: 0 },
  { phoneme: 'k', odds: 10 },
  { phoneme: 'l', odds: 0 },
  { phoneme: 'p', odds: 10 },
  { phoneme: 's', odds: 10 },
  { phoneme: 't', odds: 10 },
  { phoneme: 'ʃp', odds: 0 },
  { phoneme: 'ʃk', odds: 0 },
  { phoneme: 'sp', odds: 0 },
  { phoneme: 'sk', odds: 0 },
];

export const vowels = [
  // Only back vowels o, u
  { phoneme: 'ɑ', odds: 2 },
  { phoneme: 'a', odds: 2 },
  { phoneme: 'e', odds: 2 },
  { phoneme: 'i', odds: 2 },
  { phoneme: 'o', odds: 10 },
  { phoneme: 'u', odds: 10 },
];

export const wordFinals = [
  { phoneme: 'ɑa', odds: 25 },
  { phoneme: 'a', odds: 30 },
  { phoneme: 'i', odds: 28 },
  { phoneme: 'e', odds: 27 },
  { phoneme: 'o', odds: 26 },
  { phoneme: 'ai', odds: 23 },
  { phoneme: 'ae', odds: 24 },
];

export const replacements = `
% i    e    a    ɑ    o    u
i iui  -    ja   jɑ   jo   ju
e -    eue  eja  ejɑ  ejo  eju
a +    +    aya  +    +    +
ɑ +    +    +    ɑyɑ  +    +
o owi  owe  owa  +    oyo oʔu
u wi   we   wæ   wa   wo  uyu
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