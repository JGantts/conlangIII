const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Config
const TEXDIR = "./documents/tex";
const OUTDIR = `latex-aux`;
const TEXFILE = `jgantts-conlangIII`;

// Ensure output directory exists
const outputPath = path.join(TEXDIR, OUTDIR);
if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

// Set up environment
const env = {
  ...process.env,
  TEXINPUTS: `${path.resolve(TEXDIR)}:${path.resolve(outputPath)}:` // Include TEXDIR and OUTDIR
};

// Commands
const texCommand = `xelatex -output-directory=${OUTDIR} ${TEXFILE}.tex`;
const glossCommand = `makeglossaries -d ${OUTDIR} ${path.basename(TEXFILE)}`;

try {
  // Step 1: Run xelatex (first pass)
  console.log(`Running: ${texCommand}`);
  execSync(texCommand, { stdio: "inherit", cwd: TEXDIR });

  // Step 2: Run makeglossaries
  console.log(`Running: ${glossCommand}`);
  execSync(glossCommand, { stdio: "inherit", cwd: TEXDIR, env });

  // Step 3: Run xelatex again (final pass)
  console.log(`Running: ${texCommand}`);
  execSync(texCommand, { stdio: "inherit", cwd: TEXDIR });

  console.log("Build complete.");
} catch (error) {
  console.error("Build failed:", error.message);
  process.exit(1);
}
