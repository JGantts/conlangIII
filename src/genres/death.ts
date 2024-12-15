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
  { phoneme: 'f', odds: 10 },
  { phoneme: 'g', odds: 0 },
  { phoneme: 'gʷ', odds: 0 },
  { phoneme: 'x', odds: 10 },
  { phoneme: 'k', odds: 0 },
  { phoneme: 'kʷ', odds: 0 },
  { phoneme: 'l', odds: 0 },
  { phoneme: 'm', odds: 10 },
  { phoneme: 'mʷ', odds: 0 },
  { phoneme: 'n', odds: 0 },
  { phoneme: 'p', odds: 0 },
  { phoneme: 'pʷ', odds: 0 },
  { phoneme: 'ɹ', odds: 0 },
  { phoneme: 's', odds: 0 },
  { phoneme: 't', odds: 0 },
  { phoneme: 'ʔ', odds: 10 },
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
  // Allow maybe f, x, m, t
  // Actually, t is zero from onsets, but let's allow it in codas
  { phoneme: 'n', odds: 0 },
  { phoneme: 'ʃ', odds: 0 },
  { phoneme: 't͡ʃ', odds: 0 },
  { phoneme: 'ʒ', odds: 0 },
  { phoneme: 'd͡ʒ', odds: 0 },
  { phoneme: 'k', odds: 0 },
  { phoneme: 'l', odds: 0 },
  { phoneme: 'p', odds: 0 },
  { phoneme: 's', odds: 0 },
  { phoneme: 't', odds: 5 },   // t appears only in coda here
  { phoneme: 'ʃp', odds: 0 },
  { phoneme: 'ʃk', odds: 0 },
  { phoneme: 'sp', odds: 0 },
  { phoneme: 'sk', odds: 0 },
  
  // Let's add f, x, m to codas as well:
  // Not originally listed in baseline codas, so we leave them out. 
  // We'll rely on 't' to be unique in codas for this set.
];

export const vowels = [
  // Mostly low vowels
  { phoneme: 'ɑ', odds: 20 },
  { phoneme: 'a', odds: 20 },
  { phoneme: 'e', odds: 2 },
  { phoneme: 'i', odds: 2 },
  { phoneme: 'o', odds: 2 },
  { phoneme: 'u', odds: 2 },
];

export const wordFinals = [
  { phoneme: 'ʔu', odds: 20 },
  { phoneme: 's', odds: 18 },
  { phoneme: 'kʷe', odds: 22 },
  { phoneme: 'kʷi', odds: 20 },
];

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