<template>

  <h1>Dictionary</h1>
  <div class="dictionary">
    <div
      v-for="entry in tsvData"
      :key="entry.lexeme"
      class="dictionary-entry"
    >
      <h2>{{ entry.lexeme }}</h2>
      <h4>{{ entry.simple }}</h4>
      <ul class="definitions-list">
        <li
          v-for="(definition, index) in entry.entries"
          :key="index"
          class="definition-holder"
        >
          <div class="definition">
            <div class="definition-header">
              <span style="font-weight: bold;">{{ index + 1 }}</span>
              <span>&nbsp;</span>
              <span
                v-if="definition.partOfSpeech === 'n.'"
                style="font-style: italic;"
              >
                n.
              </span>
              <span
                v-if="definition.partOfSpeech === 'v.'"
                style="font-style: italic;"
              >
                v.
              </span>
              <span>&nbsp;</span>
              <span>{{ definition.description }}</span>
            </div>
            <template v-if="definition.examples && definition.examples.length > 0">
              <div class="examples-container">
                <ul class="examples-list">
                  <li
                    v-for="(example, exIndex) in definition.examples"
                    :key="exIndex"
                    class="example"
                  >
                    <div class="example-lang">{{ example.ex }}</div>
                    <!--
                      <div><strong>Gloss I:</strong> {{ example.glossI || "N/A" }}</div>
                      <div><strong>Gloss II:</strong> {{ example.glossII || "N/A" }}</div>
                    -->
                    <div class="english">"{{ example.english }}"</div>
                  </li>
                </ul>
              </div>
            </template>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
type CollapsedLexeme = {
  lexeme: string;
  simple: string;
  entries: {
    partOfSpeech: string;
    nounClass?: string;
    description: string;
    examples: {
      ex: string;
      english: string;
    }[]
  }[];
};


import { defineComponent } from "vue";
import Papa from "papaparse";
import { ref, onMounted } from "vue";

// Ref for storing TSV data
const tsvData = ref<CollapsedLexeme[]>([]);

function collapseLexemes(rows: string[][]): CollapsedLexeme[] {
  const result: Record<string, CollapsedLexeme> = {};

  rows.forEach((row: string[]) => {
    // Split the row by tabs
    const [
      lexeme, simple,
      partOfSpeech, nounClass, description,
      ex1, eng1,
      ex2, eng2,
      ex3, eng3
    ] = [...row];

    if (!lexeme || !description) {
      console.warn(`Skipping invalid row: ${row}`);
      return;
    }

    

    // If the lexeme isn't already in the result, add it
    if (!result[lexeme]) {
      result[lexeme] = {
        lexeme,
        simple,
        entries: [],
      };
    }

    if (!result[lexeme].simple) {
      result[lexeme].simple = simple
    }

    const examples: {ex: string, english: string}[] = []

    if (ex1 != undefined && ex1 != "") {
      examples.push({ex: ex1, english: eng1})
    }
    if (ex2 != undefined && ex2 != "") {
      examples.push({ex: ex2, english: eng2})
    }
    if (ex3 != undefined && ex3 != "") {
      examples.push({ex: ex3, english: eng3})
    }

    // Add this row's data to the lexeme's entries
    result[lexeme].entries.push({
      partOfSpeech: partOfSpeech || "",
      nounClass: nounClass || undefined,
      description: description || "",
      examples
    });
  });

  // Convert the result object back to an array
  return Object.values(result).sort((x, y) => x.lexeme > y.lexeme ? 1 : -1);
}

// Function to fetch and parse TSV file from URL
const fetchTSVFromURL = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch TSV file: ${response.statusText}`);
    }
    const text = await response.text();
    // Parse the TSV data
    Papa.parse(text, {
      delimiter: "\t",
      skipEmptyLines: true,
      complete: (results: { data: string[][]; }) => {
        console.log(results)
        tsvData.value = collapseLexemes(results.data as string[][]);
        console.log("Parsed TSV Data:", tsvData.value);
      },
    });
  } catch (error) {
    console.error("Error loading TSV file:", error);
  }
};

// Load the TSV file on component mount
onMounted(() => {
  const tsvURL = "/conlangiii/dictionary.tsv"; // Replace with your TSV file URL
  fetchTSVFromURL(tsvURL);
});

</script>

<style scoped>
/* General Styles */
.dictionary {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: inherit;
  color: var(--text-color);
  background-color: var(--bg-color);
  max-width: 1200px;
  width: calc(200px*4 + 20px*4);
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.8rem;
  color: var(--text-color);
}

/* Entry Styles */
.dictionary-entry {
  position: relative;
  border: none;
  background-color: var(--bg-color);
  width: 200px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.dictionary-entry:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.dictionary-entry h2 {
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  text-transform: lowercase;
  color: var(--text-color);
}

.dictionary-entry::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    var(--bg-color) 100%
  );
  pointer-events: none;
}

.dictionary-entry:hover::before {
  background: none;
}

.dictionary-entry::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid var(--text-color-faded);
  border-radius: 10px;
}

.dictionary-entry .definitions-list {
  height: 40px;
  overflow: hidden;
  transition: height 0.3s;
}

.dictionary-entry:hover .definitions-list {
  height: 100px;
  overflow: visible;
}

/* Definitions List */
.definitions-list {
  pointer-events: none;
  list-style-type: none;
  padding: 0;
  margin: 0;
  border-radius: 10px;
}

.definitions-list:first-child {
  border-radius: 10px;
}

.definition-holder {
  pointer-events: none;
  border-radius: 10px;
  padding: 15px 15px;
  background-color: var(--bg-color-faded);
  box-shadow: 0 10px 5px 10px var(--bg-color-faded);
}

.dictionary-entry:hover .definitions-list {
  position: relative;
  z-index: 10;
}

.definition:hover .def-elipsis {
  opacity: 0;
  transition: opacity 0.3s;
}

.definition:first-child {
  border-top: none; /* Remove line above the first definition */
}

.definition-header {
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 1.1rem;
  color: var(--text-color);
}

/* Examples */
.examples-container {
  margin-top: 10px;
  padding-left: 15px;
}

.examples-list {
  list-style-type: none;
  padding: 0;
}

.example {
  background-color: var(--bg-color-faded-faded);
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.example div {
  margin-bottom: 5px;
}

.example div:last-child {
  margin-bottom: 0;
}

strong {
  color: var(--text-color);
}

h4 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 300;
  color: var(--text-color);
}

.example-lang {
  font-weight: 100;
}

.english {
  font-weight: 100;
  font-style: italic;
}
</style>
