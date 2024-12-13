// generator.ts
import { onsets, vowels, codas, bannedClusters } from "./phonemes";
import { getRandomPhoneme, getRandomSyllableCount } from "./helpers";
import { applyChartRules } from "./chart";

export const generateSyllable = (syllableType: string[]): string => {
  let syllable = "";
  syllableType.forEach((symbol) => {
    if (symbol === "O") {
      syllable += getRandomPhoneme(onsets);
    } else if (symbol === "O?") {
      if (Math.random() > 0.5) {
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

export const generateRawWord = (chart: Record<string, Record<string, string>>): string => {
  let word = "";
  const syllableCount = getRandomSyllableCount(syllableCounts);

  word += generateSyllable(["V"])
  for (let i = 0; i < syllableCount-1; i++) {
    word += generateSyllable(["O?", "V"]);
  }
  word += generateSyllable(["C?"])

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
    const rawWord = generateRawWord(chart);
    word = filterWord(rawWord, chart);
    attempts++;
    if (attempts >= maxAttempts) {
      throw new Error("Failed to generate a valid word after 100 attempts.");
    }
  } while (!word);

  return word;
};
