// romanize.ts

import { ipaToRoman } from '../ipaToRoman';

/**
 * Romanizes an IPA word based on predefined mappings by using an intermediate code step.
 * @param ipaWord - The IPA word to be romanized.
 * @returns The romanized version of the IPA word.
 */
export function romanize(ipaWord: string): string {
  // Step 1: Convert IPA to Intermediate Codes
  const ipaSymbols = Object.keys(ipaToRoman).sort((a, b) => b.length - a.length);

  let intermediate = '';
  let i = 0;

  while (i < ipaWord.length) {
    let matched = false;

    for (const symbol of ipaSymbols) {
      if (ipaWord.substr(i, symbol.length) === symbol) {
        const intermediateCode = `@${symbol}@`;
        intermediate += intermediateCode;
        i += symbol.length;
        matched = true;
        break;
      }
    }

    if (!matched) {
      // Handle unknown characters by wrapping them distinctly
      const unknownChar = ipaWord.charAt(i);
      intermediate += `@UNK:${unknownChar}@`;
      i++;
    }
  }

  // Step 2: Convert Intermediate Codes to Final Romanization
  // Create a regex pattern that matches all @symbol@ sequences
  const intermediateRegex = /@([^@]+)@/g;

  const romanized = intermediate.replace(intermediateRegex, (match, p1) => {
    if (ipaToRoman[p1]) {
      return ipaToRoman[p1];
    } else {
      // Handle unknown symbols, e.g., by removing the delimiters or replacing with a placeholder
      // Here, we'll remove the delimiters and keep the unknown character
      const unknownMatch = /^UNK:(.)$/.exec(p1);
      if (unknownMatch) {
        return unknownMatch[1]; // Return the unknown character without delimiters
      }
      // If it's an unexpected intermediate code, return it as-is or decide on another strategy
      return p1;
    }
  });

  return romanized;
}
