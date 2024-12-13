import { onsets, codas, vowels } from '../genres/death'

export { onsets, codas, vowels };

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

export const chartText = `
% i    e    a    ɑ    o    u
i iʔi  -    ja   jɑ   jo   ju
e -    eʔe  eja  ejɑ  ejo  eju
a +    +    aʔa  +    +    +
ɑ +    +    +    ɑʔɑ  +    +
o owi  owe  owa  +    oʔo oʔu
u wi   we   wæ   wa   wo  uʔu
`;