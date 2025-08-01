#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const publicDir = path.join(distDir, 'public');

// Function to move files from dist/public to dist
function moveFiles(source, destination) {
  if (!fs.existsSync(source)) {
    console.log('Source directory does not exist:', source);
    return;
  }

  const items = fs.readdirSync(source);
  
  items.forEach(item => {
    const sourcePath = path.join(source, item);
    const destPath = path.join(destination, item);
    
    const stat = fs.statSync(sourcePath);
    
    if (stat.isDirectory()) {
      // Create directory if it doesn't exist
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath, { recursive: true });
      }
      // Recursively move files
      moveFiles(sourcePath, destPath);
    } else {
      // Move file
      fs.copyFileSync(sourcePath, destPath);
      console.log(`Moved: ${item}`);
    }
  });
}

console.log('Moving build files from dist/public to dist...');

if (fs.existsSync(publicDir)) {
  // Move all files from dist/public to dist
  moveFiles(publicDir, distDir);
  
  // Remove the now-empty public directory
  fs.rmSync(publicDir, { recursive: true, force: true });
  console.log('Build output moved successfully. Files are now in dist/ directory.');
} else {
  console.log('No dist/public directory found. Build output may already be in the correct location.');
}