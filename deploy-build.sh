#!/bin/bash

# Replit Static Deployment Build Script
# This script ensures proper build output structure for deployment

echo "🚀 Starting deployment build process..."

# Run the standard build
echo "📦 Building application..."
if npm run build; then
    echo "✅ Build completed successfully"
else
    echo "❌ Build failed"
    exit 1
fi

# Fix the deployment structure
echo "🔧 Fixing deployment structure..."

if [ -d "dist/public" ]; then
    echo "📁 Moving files from dist/public/ to dist/..."
    
    # Move all files from dist/public to dist
    cp -r dist/public/* dist/ 2>/dev/null || true
    
    # Remove the public subdirectory
    rm -rf dist/public
    
    echo "✅ Files moved successfully"
else
    echo "ℹ️  No dist/public directory found - build output already in correct location"
fi

# Verify the final structure
echo "📋 Final deployment structure:"
ls -la dist/ 2>/dev/null || echo "❌ No dist directory found"

# Check for required files
if [ -f "dist/index.html" ]; then
    echo "✅ index.html found in correct location"
else
    echo "❌ index.html not found in dist/ - deployment will fail"
    exit 1
fi

if [ -f "dist/index.js" ]; then
    echo "✅ Server file (index.js) found"
else
    echo "❌ Server file (index.js) not found"
    exit 1
fi

echo "🎉 Deployment build completed successfully!"
echo "📝 The project is now ready for static deployment on Replit"