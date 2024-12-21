<template>
  <DictionaryDisplay />

  <div id="words-container">
    <h1>Conlang Word Generator</h1>
    
    <div id="controls">
      <button @click="generateWords()">Generate Words</button>
    </div>
    
    <div id="err">
      {{ errorMessage }}
    </div>

    <div id="words">
      <ul>
        <li v-for="(word, index) in words" :key="index">{{ word }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { romanize } from './helpers/romanize';
import { parseChart } from './helpers/chart';
import { getValidWord, replacements as chartText } from './helpers/generator';
import DictionaryDisplay from './Dictionary.vue'


const chart = parseChart(chartText);

const words = ref<string[]>([]);
const errorMessage = ref("");
const wordCount = 1000;

const generateWords = () => {
  words.value = [];
  let newWords: string[] = [];
  errorMessage.value = "";

  let attempts = 0;
  let errorCount = 0;

  while (attempts < wordCount) {
    attempts++;
    try {
      const w = getValidWord(chart);
      newWords.push(w);
    } catch (error) {
      errorCount++;
    }
  }

  newWords = [...new Set(newWords)];
  //newWords = newWords.sort()

  let newIPAPlusOrtho: string[] = []

  for(let i=0; i<newWords.length; i++){
    let word = newWords[i]
    //newIPAPlusOrtho.push(`/${word}/ ⟨${romanize(word)}⟩`)
    newIPAPlusOrtho.push(romanize(word))
  }

  words.value = newIPAPlusOrtho;

  if (errorCount > 0) {
    errorMessage.value = `Failed to generate ${errorCount} out of ${wordCount} words.`;
  }
};

generateWords();
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
}

#words-container {
  padding: 20px;
  max-width: 500px;
  margin: 0 0; /* Ensure some spacing at the top */
  text-align: center;
}

#words {
  max-width: 250px;
  margin: auto;
}

#controls {
  margin-bottom: 20px;
}

#controls label {
  margin-right: 10px;
  font-weight: bold;
  color: var(--text-color);
}

#controls input {
  width: 50px;
  padding: 5px;
  margin-right: 10px;
  background-color: var(--bg-color);
  color: var(--text-color);
  border: 1px solid var(--text-color);
  border-radius: 4px;
}

#controls button {
  padding: 10px 20px; /* Increase padding for better size */
  background-color: var(--button-bg-color); /* Vibrant background */
  color: var(--button-text-color); /* High contrast text color */
  font-size: 1rem; /* Slightly larger text */
  font-weight: bold; /* Make text bold */
  border: none;
  border-radius: 6px; /* Slightly larger rounding for a modern look */
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  transition: all 0.3s ease; /* Smooth animation on hover */
}

#controls button:hover {
  background-color: var(--button-hover-bg-color); /* Highlighted hover color */
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2); /* More pronounced shadow */
  transform: translateY(-2px); /* Lift effect on hover */
}

#controls button:active {
  transform: translateY(0); /* Reset lift effect on click */
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.15); /* Slightly reduced shadow */
}


#controls button:hover {
  background-color: var(--button-hover-bg-color);
}

#words ul {
  list-style-type: none;
  padding: 0;
}

#words li {
  background-color: var(--bg-color);
  margin: 5px 0;
  padding: 10px;
  border-radius: 4px;
  font-size: 1.2em;
  color: var(--text-color);
}
</style>
