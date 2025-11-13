import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const bootstrapScssDir = path.join(rootDir, 'node_modules', 'bootstrap', 'scss');
const variablesDarkFile = path.join(bootstrapScssDir, '_variables-dark.scss');

try {
  // Ensure bootstrap scss directory exists
  if (!fs.existsSync(bootstrapScssDir)) {
    console.error(`❌ Bootstrap SCSS directory not found: ${bootstrapScssDir}`);
    process.exit(1);
  }

  // Create the missing _variables-dark.scss file if it doesn't exist
  if (!fs.existsSync(variablesDarkFile)) {
    fs.writeFileSync(
      variablesDarkFile,
      '// Empty stub for optional Bootstrap dark variables\n// This file is created by postinstall script to prevent build errors\n'
    );
    console.log('✓ Created missing _variables-dark.scss file in Bootstrap');
  } else {
    console.log('✓ _variables-dark.scss already exists');
  }
} catch (error) {
  console.error('❌ Error in postinstall script:', error.message);
  process.exit(1);
}

