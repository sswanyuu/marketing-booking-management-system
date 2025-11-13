import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const configPath = path.join(rootDir, '.vitepress', 'config.ts');

// Read base path from config
let basePath = '/marketing-booking-management-system/'; // default
try {
  const configContent = fs.readFileSync(configPath, 'utf8');
  const baseMatch = configContent.match(/base:\s*['"`]([^'"`]+)['"`]/);
  if (baseMatch) {
    basePath = baseMatch[1];
  }
} catch (error) {
  console.warn('⚠️  Could not read base path from config, using default');
}

// Function to recursively get all files in a directory
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Function to fix asset paths and base path in a file
function fixAssetPaths(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  const originalContent = content;

  // Fix base path in __VP_SITE_DATA__ - change "base":"/" to the correct base path
  content = content.replace(/"base"\s*:\s*"\/"/g, `"base":"${basePath}"`);

  const basePathNoSlash = basePath.replace(/\/$/, ''); // Remove trailing slash for matching

  // First, fix paths that have base path but missing slash: /marketing-booking...assets/ -> /marketing-booking.../assets/
  // This handles cases where base path was incorrectly concatenated
  content = content.replace(
    new RegExp(`(${basePathNoSlash.replace(/\//g, '\\/')})assets/`, 'g'),
    `${basePath}assets/`
  );

  // Fix paths in href/src attributes that start with /assets/ - make them use base path
  content = content.replace(
    /(href|src)=["']\/(assets\/[^"'`]+)["']/g,
    (match, attr, assetPath) => {
      return `${attr}="${basePath}${assetPath}"`;
    }
  );

  // Fix paths in href/src that already have base path but wrong format
  content = content.replace(
    new RegExp(
      `(href|src)=["'](${basePathNoSlash.replace(/\//g, '\\/')})assets/`,
      'g'
    ),
    `$1="${basePath}assets/`
  );

  // Fix in CSS url() functions
  content = content.replace(
    /url\(["']?\/(assets\/[^"'`)]+)["']?\)/g,
    (match, assetPath) => {
      return `url("${basePath}${assetPath}")`;
    }
  );

  // Fix in JavaScript string literals and imports
  content = content.replace(
    /(["'`])\/(assets\/[^"'`]+)(["'`])/g,
    (match, quote1, assetPath, quote2) => {
      // Only fix if it's not already using base path
      if (!assetPath.startsWith(basePathNoSlash)) {
        return `${quote1}${basePath}${assetPath}${quote2}`;
      }
      return match;
    }
  );

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    modified = true;
  }

  return modified;
}

// Main function
function main() {
  if (!fs.existsSync(distDir)) {
    console.error('❌ dist/ directory not found. Please build the site first.');
    process.exit(1);
  }

  console.log(`🔧 Fixing asset paths and base path in dist/...`);
  console.log(`   Base path: ${basePath}`);

  // Get all HTML, CSS, and JS files
  const files = getAllFiles(distDir).filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.html', '.css', '.js'].includes(ext);
  });

  let fixedCount = 0;

  files.forEach(file => {
    if (fixAssetPaths(file)) {
      fixedCount++;
      console.log(`  ✓ Fixed: ${path.relative(distDir, file)}`);
    }
  });

  if (fixedCount > 0) {
    console.log(`\n✅ Fixed asset paths in ${fixedCount} file(s)`);
  } else {
    console.log('\n✓ No asset path fixes needed');
  }
}

main();
