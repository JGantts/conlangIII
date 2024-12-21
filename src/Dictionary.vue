<template>
      <h1>Dictionary</h1>
    <div class="dictionary">
      <div v-for="entry in dictionaryData" :key="entry.lexeme" class="dictionary-entry">
        <h2>{{ entry.lexeme }}</h2>
        <h4>{{ entry.simple }}</h4>
        <ul class="definitions-list">
          <li v-for="(definition, index) in entry.defs" :key="index" class="definition-holder">
            <div class="definition">
                <div class="definition-header">
                    <span style="font-style: bold;">{{ index+1 }}</span>
                    <span>&nbsp;</span>
                    <span v-if="definition.type.type=='noun'" style="font-style: italic;">n.</span>
                    <span v-if="definition.type.type=='verb'" style="font-style: italic;">v.</span>
                    <span>&nbsp;</span>
                    <span>{{ definition.def }}</span>
                </div>
                <template v-if="definition.ex && definition.ex.length > 0">
                <div class="examples-container">
                    <ul class="examples-list">
                    <li v-for="(example, exIndex) in definition.ex" :key="exIndex" class="example">
                        <div class="example-lang">{{ example.ex }}</div>
                        <!--
                        <div><strong>Gloss I:</strong> {{ example.glossI || "N/A" }}</div>
                        <div><strong>Gloss II:</strong> {{ example.glossII || "N/A" }}</div>
                        -->
                        <div class="english">"{{ example.eng }}"</div>
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
  
  <script>
  import { defineComponent } from "vue";
  import dictionaryData from "./dictionary.json"; // Import the JSON file
  
  console.log(dictionaryData)

  export default defineComponent({
    name: "DictionaryDisplay",
    setup() {
      return {
        dictionaryData,
      };
    },
  });
  </script>
  
  <style scoped>
/* General Styles */
.dictionary {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  font-family: inherit;
  color: var(--text-color);
  background-color: var(--bg-color);
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  width: 800px;
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
  padding: 20px 20px 0 20px;
  width: 200px;
  margin-bottom: 20px;
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
    height: 40px; /* Adjust the height of the gradient */
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, var(--bg-color) 100%);
    pointer-events: none; /* Ensures the pseudo-element doesn't interfere with user interaction */
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
  list-style-type: none;
  padding: 0;
  margin: 0;
  border-radius: 10px;
}

.definitions-list:first-child {
  border-radius: 10px;
}

.definition-holder {
  padding: 15px 15px;
  background-color: var(--bg-color-faded);
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
