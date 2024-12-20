const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Config
const TEXDIR = "./documents/tex"
const OUTDIR = `./latex-aux`;
const TEXFILE = `./jgantts-conlangIII`;

if (!fs.existsSync(`${TEXDIR}/${OUTDIR}`)) {
  fs.mkdirSync(`${TEXDIR}/${OUTDIR}`, { recursive: true });
}

const env = { ...process.env, TEXINPUTS: `${TEXDIR}/${OUTDIR}:` }; // ':' at the end includes default paths


// make glossaries
const glossCommand = `makeglossaries ${TEXFILE}`;
// Build Command
const texCommand = `xelatex -output-directory=${OUTDIR} ${TEXFILE}.tex`;
try {
  // Step 1: Run pdflatex (first pass)
  console.log(`Running: ${texCommand}`);
  execSync(texCommand, { stdio: "inherit", cwd: TEXDIR });

  // Step 2: Run makeglossaries
  console.log(`Running: ${glossCommand}`);
  execSync(glossCommand, { stdio: "inherit", cwd: TEXDIR, env });

  // Step 3: Run pdflatex again (final pass)
  console.log(`Running: ${texCommand}`);
  execSync(texCommand, { stdio: "inherit", cwd: TEXDIR });

  console.log("Build complete.");
} catch (error) {
  console.error("Build failed:", error.message);
  process.exit(1);
}
