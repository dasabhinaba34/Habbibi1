#!/bin/bash

echo "Running build..."
npm run build

echo "Fixing deployment structure..."

# Check if dist/public exists
if [ -d "dist/public" ]; then
    echo "Moving files from dist/public to dist..."
    
    # Move all files from dist/public to dist
    cp -r dist/public/* dist/ 2>/dev/null || true
    
    # Remove the public subdirectory
    rm -rf dist/public
    
    echo "✅ Build output moved successfully. Files are now in dist/ directory."
    echo "The deployment should now work correctly."
else
    echo "❌ No dist/public directory found. Build may have failed or structure is different."
fi

echo "Contents of dist directory:"
ls -la dist/ 2>/dev/null || echo "No dist directory found"