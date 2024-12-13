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
  { phoneme: 'ʃm', odds: 1 },
  { phoneme: 'ʃn', odds: 1 },
  { phoneme: 'ʃp', odds: 1 },
  { phoneme: 'ʃpʷ', odds: 1 },
  { phoneme: 'ʃk', odds: 1 },
  { phoneme: 'ʃkʷ', odds: 1 },
  { phoneme: 'ʃʷ', odds: 1 },
  { phoneme: 'sm', odds: 2 },
  { phoneme: 'sn', odds: 2 },
  { phoneme: 'sp', odds: 2 },
  { phoneme: 'spʷ', odds: 1 },
  { phoneme: 'sk', odds: 3 },
  { phoneme: 'skʷ', odds: 1 },
  { phoneme: 'sʷ', odds: 1 },
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