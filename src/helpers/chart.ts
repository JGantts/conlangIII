// chart.ts
export const parseChart = (chartText: string) => {
  const lines = chartText.trim().split("\n");
  const headers = lines[0].trim().split(/\s+/).slice(1);
  const chart: Record<string, Record<string, string>> = {};

  lines.slice(1).forEach((line) => {
    const cells = line.trim().split(/\s+/);
    const row = cells[0];
    chart[row] = {};
    cells.slice(1).forEach((cell, index) => {
      chart[row][headers[index]] = cell;
    });
  });

  return chart;
};

export const applyChartRules = (word: string, chart: Record<string, Record<string, string>>): string | false => {
  let result = "";
  let i = 0;

  while (i < word.length) {
    const start = word[i];
    const end = word[i + 1] || "";

    if (chart[start]?.[end]) {
      const rule = chart[start][end];
      if (rule === "+") {
        result += start + end;
      } else if (rule === "-") {
        return false;
      } else {
        result += rule;
      }
      i += 2;
    } else {
      result += start;
      i++;
    }
  }

  return result;
};
