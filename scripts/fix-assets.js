import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

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

// Function to fix asset paths in a file
function fixAssetPaths(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Replace "/assets/" with "assets/" (remove leading slash)
  const originalContent = content;
  content = content.replace(/\/assets\//g, 'assets/');
  
  // Also fix any other absolute paths that should be relative
  // Replace patterns like "/index.html" with "index.html" (but not in URLs)
  content = content.replace(/(["'])\/(assets\/[^"']+)(["'])/g, '$1$2$3');
  
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
  
  console.log('🔧 Fixing asset paths in dist/...');
  
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

