export const onsets = [
  { phoneme: 'b', odds: 15 },
  { phoneme: 'bʷ', odds: 4 },   // Labialized variant less frequent
  { phoneme: 'ʃ', odds: 12 },   // Common but slightly reduced
  { phoneme: 't͡ʃ', odds: 3 },  // Complex affricate lowered
  { phoneme: 't͡ʃʷ', odds: 1 }, // Even rarer for labialized affricate
  { phoneme: 'ʒ', odds: 4 },    // Reduced complexity
  { phoneme: 'd͡ʒ', odds: 2 },  // Less frequent complex sound
  { phoneme: 'ʒʷ', odds: 2 },   // Labialized variant rare
  { phoneme: 'd', odds: 18 },   // Simple consonant more common
  { phoneme: 'f', odds: 12 },   // A bit more common
  { phoneme: 'g', odds: 14 },   // More common
  { phoneme: 'gʷ', odds: 3 },   // Labialized less frequent
  { phoneme: 'x', odds: 10 },   // Velar fricative moderate
  { phoneme: 'k', odds: 20 },   // A common simple consonant
  { phoneme: 'kʷ', odds: 1 },   // Rare labialized
  { phoneme: 'l', odds: 24 },   // Pleasant liquid sound more frequent
  { phoneme: 'm', odds: 26 },   // Nasals are pleasant, boost it
  { phoneme: 'mʷ', odds: 2 },   // Rare labialized nasal
  { phoneme: 'n', odds: 28 },   // Very common nasal
  { phoneme: 'p', odds: 30 },   // Plosives simple and common
  { phoneme: 'pʷ', odds: 2 },   // Labialized rare
  { phoneme: 'ɹ', odds: 29 },   // Approximant, fairly common
  { phoneme: 's', odds: 33 },   // Very common fricative
  { phoneme: 't', odds: 34 },   // Very common plosive
  { phoneme: 'ʔ', odds: 15 },   // Glottal stop less frequent than before
  { phoneme: 'w', odds: 35 },   // Approximant w is pleasant
  { phoneme: 'j', odds: 36 },   // Approximant j also very pleasant
  { phoneme: 'z', odds: 37 },   // Voiced sibilant common
  { phoneme: 'ʃm', odds: 1 },   // Complex cluster minimized
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
  { phoneme: 'n', odds: 20 },   // Nasals are nice codas
  { phoneme: 'ʃ', odds: 10 },   // Still possible, less common
  { phoneme: 't͡ʃ', odds: 2 },  // Complex affricate rare
  { phoneme: 'ʒ', odds: 3 },    // Voiced fricative less common
  { phoneme: 'd͡ʒ', odds: 2 },  // Rare complex end
  { phoneme: 'k', odds: 18 },   // Common plosive
  { phoneme: 'l', odds: 17 },   // Liquid ending is nice
  { phoneme: 'p', odds: 16 },   // Simple plosive
  { phoneme: 's', odds: 25 },   // High because s-endings are okay
  { phoneme: 't', odds: 23 },   // Common plosive ending
  { phoneme: 'ʃp', odds: 1 },   // Complex cluster rare
  { phoneme: 'ʃk', odds: 2 },   // Reduced
  { phoneme: 'sp', odds: 3 },
  { phoneme: 'sk', odds: 4 },
];


// **Vowels**: Vowel sounds within syllables
export const vowels = [
  { phoneme: 'ɑ', odds: 20 },
  { phoneme: 'a', odds: 18 },
  { phoneme: 'e', odds: 22 },
  { phoneme: 'i', odds: 20 },  // Reduced slightly to balance
  { phoneme: 'o', odds: 19 },
  { phoneme: 'u', odds: 17 },
];


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
