<template>
    <div class="dictionary">
      <h1>Dictionary</h1>
      <div v-for="entry in dictionaryData" :key="entry.lexeme" class="dictionary-entry">
        <h2>{{ entry.lexeme }}</h2>
        <ul class="definitions-list">
          <li v-for="(definition, index) in entry.defs" :key="index" class="definition">
            <div class="definition-header">
              <strong>{{ formatType(definition.type) }}</strong>: {{ definition.def }}
            </div>
            <template v-if="definition.ex && definition.ex.length > 0">
              <div class="examples-container">
                <h4>Examples:</h4>
                <ul class="examples-list">
                  <li v-for="(example, exIndex) in definition.ex" :key="exIndex" class="example">
                    <div><strong>Example:</strong> {{ example.ex }}</div>
                    <div><strong>Gloss I:</strong> {{ example.glossI || "N/A" }}</div>
                    <div><strong>Gloss II:</strong> {{ example.glossII || "N/A" }}</div>
                    <div><strong>Translation:</strong> {{ example.eng }}</div>
                  </li>
                </ul>
              </div>
            </template>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import dictionaryData from "./dictionary.json"; // Import the JSON file
  
  export default defineComponent({
    name: "DictionaryDisplay",
    setup() {
      const formatType = (typeObj) => {
        if (typeObj.type === "noun") {
          return `Noun (Class: ${typeObj.class})`;
        } else if (typeObj.type === "verb") {
          return `Verb (Valency: ${typeObj.valency}, Volition: ${typeObj.volition})`;
        }
        return "Unknown Type";
      };
  
      return {
        dictionaryData,
        formatType,
      };
    },
  });
  </script>
  
  <style scoped>
/* General Styles */
.dictionary {
  font-family: inherit;
  color: var(--text-color);
  background-color: var(--bg-color);
  max-width: 800px;
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
  border: 1px solid var(--text-color-faded);
  background-color: var(--bg-color);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.dictionary-entry:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.dictionary-entry h2 {
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--text-color);
}

/* Definitions List */
.definitions-list {
  list-style-type: none;
  padding: 0;
}

.definition {
  padding: 15px 0;
  border-top: 1px solid var(--text-color-faded);
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
  background-color: var(--bg-color);
  border: 1px solid var(--text-color-faded);
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
  margin-bottom: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--text-color);
}
</style>
