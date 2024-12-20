// generator.ts
import { onsets, vowels, codas, wordFinals, bannedClusters, replacements } 
  from "../genres/chaos";
import { getRandomPhoneme, getRandomSyllableCount } from "./helpers";
import { applyChartRules } from "./chart";

export { replacements }

export const generateSyllable = (syllableType: string[]): string => {
  let syllable = "";
  syllableType.forEach((symbol) => {
    if (symbol === "O") {
      syllable += getRandomPhoneme(onsets);
    } else if (symbol === "O?") {
      if (Math.random() > 0.25) {
        syllable += getRandomPhoneme(onsets);
      }
    } else if (symbol === "C") {
      syllable += getRandomPhoneme(codas);
    } else if (symbol === "C?") {
      if (Math.random() > 0.5) {
        syllable += getRandomPhoneme(codas);
      }
    } else if (symbol === "V") {
      syllable += getRandomPhoneme(vowels);
    } else if (symbol === "V?") {
      if (Math.random() > 0.5) {
        syllable += getRandomPhoneme(vowels);
      }
    } else if (symbol === "F") {
      syllable += getRandomPhoneme(wordFinals);
    }
  });
  return syllable;
};

const syllableCounts = [
  { count: 1, odds: 1 },
  { count: 2, odds: 5 },
  { count: 3, odds: 2 },
  { count: 4, odds: 0 },
];

export const generateRawWord = (): string => {
  let word = "";
  const syllableCount = getRandomSyllableCount(syllableCounts);

  for (let i = 0; i < syllableCount; i++) {
    if (i==0) {
      word += generateSyllable(["V"]);
    } else if (i < syllableCount-1) {
      word += generateSyllable(["O", "V"]);
    } else {
      word += generateSyllable(["F"]);
    }
  }

  return word;
};

export const filterWord = (word: string | false, chart: Record<string, Record<string, string>>): string | false => {
  if (!word) return false;
  word = applyChartRules(word, chart);
  if (!word) return false;

  for (const pattern of bannedClusters) {
    if (pattern.test(word)) {
      console.log(`Word "${word}" is invalid due to banned cluster: ${pattern}`);
      return false;
    }
  }

  return word;
};

export const getValidWord = (chart: Record<string, Record<string, string>>): string => {
  let word: string | false = false;
  let attempts = 0;
  const maxAttempts = 100;

  do {
    const rawWord = generateRawWord();
    word = filterWord(rawWord, chart);
    attempts++;
    if (attempts >= maxAttempts) {
      throw new Error(`Failed to generate a valid word after ${maxAttempts} attempts.`);
    }
  } while (!word);

  return word;
};
