// helpers.ts
export const getRandomPhoneme = (phonemeList: { phoneme: string; odds: number }[]): string => {
  const totalOdds = phonemeList.reduce((sum, item) => sum + item.odds, 0);
  const randomValue = Math.random() * totalOdds;

  let cumulativeOdds = 0;
  for (const item of phonemeList) {
    cumulativeOdds += item.odds;
    if (randomValue < cumulativeOdds) {
      return item.phoneme;
    }
  }

  return phonemeList[phonemeList.length - 1].phoneme;
};

export const getRandomSyllableCount = (countList: { count: number; odds: number }[]): number => {
  const totalOdds = countList.reduce((sum, item) => sum + item.odds, 0);
  const randomValue = Math.random() * totalOdds;

  let cumulativeOdds = 0;
  for (const item of countList) {
    cumulativeOdds += item.odds;
    if (randomValue < cumulativeOdds) {
      return item.count;
    }
  }

  return countList[countList.length - 1].count;
};
