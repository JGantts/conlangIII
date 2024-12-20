const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Config
const TEXDIR = "./documents/tex"
const OUTDIR = `./latex-aux`;
const TEXFILE = `./jgantts-conlangIII.tex`;

if (!fs.existsSync(`${TEXDIR}/${OUTDIR}`)) {
  fs.mkdirSync(`${TEXDIR}/${OUTDIR}`, { recursive: true });
}

// Build Command
const command = `xelatex -output-directory=${OUTDIR} ${TEXFILE}`;
try {
  console.log(`Running: ${command}`);
  execSync(command, { stdio: "inherit", cwd: TEXDIR });
  console.log("Build complete.");
} catch (error) {
  console.error("Build failed:", error.message);
  process.exit(1);
}
