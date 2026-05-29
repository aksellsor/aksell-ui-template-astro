import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.cwd();
const bannedPackages = ['tailwindcss', 'bootstrap', '@tailwindcss/vite', '@astrojs/tailwind'];
const scanDirs = ['src'];
const scanFiles = ['astro.config.mjs'];
const problems = [];
const warnings = [];

const packageJson = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
const allDeps = {
  ...packageJson.dependencies,
  ...packageJson.devDependencies,
};

for (const pkg of bannedPackages) {
  if (allDeps[pkg]) {
    problems.push(`Remove CSS framework dependency: ${pkg}`);
  }
}

const layout = readFileSync(join(root, 'src/layouts/Layout.astro'), 'utf8');
if (!layout.includes("from '@aksell/ui/provider'")) {
  problems.push('Layout.astro must import UIProvider from @aksell/ui/provider');
}

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stat = statSync(path);
    const rel = relative(root, path);

    if (stat.isDirectory()) {
      walk(path);
      continue;
    }

    if (/Aeonik.*\.(woff2?|otf|ttf)$/i.test(entry)) {
      warnings.push(`${rel}: only commit Aeonik font files when this project owns a valid license`);
    }

    if (!/\.(astro|css|js|ts|tsx|jsx|html)$/.test(entry)) continue;

    const content = readFileSync(path, 'utf8');

    if (content.includes('@aksell/ui/src/')) {
      problems.push(`${rel}: import @aksell/ui through package exports, not deep src paths`);
    }

    if (/@tailwind|tailwindcss|bootstrap/i.test(content)) {
      problems.push(`${rel}: do not add Tailwind, Bootstrap, or another CSS framework`);
    }
  }
}

for (const dir of scanDirs) {
  walk(join(root, dir));
}

for (const file of scanFiles) {
  const content = readFileSync(join(root, file), 'utf8');
  if (/@tailwind|tailwindcss|bootstrap/i.test(content)) {
    problems.push(`${file}: do not add Tailwind, Bootstrap, or another CSS framework`);
  }
}

if (problems.length > 0) {
  console.error('Aksell template check failed:');
  for (const problem of problems) {
    console.error(`- ${problem}`);
  }
  process.exit(1);
}

for (const warning of warnings) {
  console.warn(`Warning: ${warning}`);
}

console.log('Aksell template check passed.');
