const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

// Config
const TEXDIR = "./documents/tex";
const OUTDIR = "latex-aux";
const TEXFILE = "画ひ言新";

// Ensure output directory exists
const outputPath = path.join(TEXDIR, OUTDIR);
if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

// Shared env
const env = {
  ...process.env,
  TEXINPUTS: `${path.resolve(TEXDIR)}:${path.resolve(outputPath)}:`
};

// helper to run a command with live output
function runCommand(cmd, args, opts = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { ...opts, stdio: 'inherit' });
    child.on('error', reject);
    child.on('close', code => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} ${args.join(' ')} exited with code ${code}`));
    });
  });
}

// Light/dark modes
const lightModes = ['0', '1'];

async function buildMode(lightMode) {
  const jobName = lightMode === '1' ? 'light' : 'dark';
  const outName = `${TEXFILE}-${jobName}`;
  const baseArgs = [
    `-output-directory=${OUTDIR}`,
    `-jobname=${outName}`,
    `\\def\\lightMode{${lightMode}}\\input{${TEXFILE}.tex}`
  ];

  console.log(`[${jobName}] 1st pass…`);
  await runCommand("xelatex", baseArgs, { cwd: TEXDIR, env });

  // if you need glossaries:
  // console.log(`[${jobName}] glossaries…`);
  // await runCommand("makeglossaries", ["-d", OUTDIR, outName], { cwd: TEXDIR, env });

  console.log(`[${jobName}] final pass…`);
  await runCommand("xelatex", baseArgs, { cwd: TEXDIR, env });

  console.log(`[${jobName}] done.`);
}

(async () => {
  try {
    await Promise.all(lightModes.map(buildMode));
    console.log("✅ All builds complete.");
  } catch (err) {
    console.error("🚨 Build failed:", err);
    process.exit(1);
  }
})();
