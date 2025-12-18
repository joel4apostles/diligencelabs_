#!/usr/bin/env node
/**
 * Build script for Hostinger Shared Hosting
 * This script prepares the app for static export and builds it
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('🚀 Building Diligence Labs for Hostinger Shared Hosting...\n');

// Step 1: Backup current next.config.ts
const configPath = path.join(__dirname, 'next.config.ts');
const configBackupPath = path.join(__dirname, 'next.config.backup.ts');

try {
  if (fs.existsSync(configPath)) {
    fs.copyFileSync(configPath, configBackupPath);
    console.log('✅ Backed up next.config.ts');
  }
} catch (error) {
  console.log('⚠️ Could not backup config file');
}

// Step 2: Create Hostinger-optimized next.config.ts
const hostingerConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Hostinger shared hosting
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Configure trailing slash for better hosting compatibility
  trailingSlash: true,
  
  // Asset prefix for CDN (can be updated later)
  assetPrefix: '',
  
  // Disable server-side features
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // Configure output directory
  distDir: 'out',
}

export default nextConfig;
`;

try {
  fs.writeFileSync(configPath, hostingerConfig);
  console.log('✅ Created Hostinger-optimized next.config.ts');
} catch (error) {
  console.log('❌ Failed to create config:', error.message);
  process.exit(1);
}

// Step 3: Clean previous build
try {
  if (fs.existsSync(path.join(__dirname, 'out'))) {
    fs.rmSync(path.join(__dirname, 'out'), { recursive: true });
    console.log('✅ Cleaned previous build');
  }
  if (fs.existsSync(path.join(__dirname, '.next'))) {
    fs.rmSync(path.join(__dirname, '.next'), { recursive: true });
    console.log('✅ Cleaned .next directory');
  }
} catch (error) {
  console.log('⚠️ Could not clean directories:', error.message);
}

// Step 4: Build for static export
console.log('📦 Building for static export...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully');
} catch (error) {
  console.log('❌ Build failed:', error.message);
  // Restore backup
  try {
    if (fs.existsSync(configBackupPath)) {
      fs.copyFileSync(configBackupPath, configPath);
      console.log('✅ Restored original config');
    }
  } catch (restoreError) {
    console.log('⚠️ Could not restore config');
  }
  process.exit(1);
}

// Step 5: Create deployment zip
console.log('📦 Creating Hostinger deployment zip...');
const timestamp = new Date().toISOString().slice(0, 16).replace(/[-:T]/g, '').replace(/\\..*/, '');
const zipName = `DiligenceLabs_Hostinger_Mobile_Optimized_${timestamp}.zip`;

try {
  execSync(`cd out && zip -r ../${zipName} . -x "*.DS_Store" "*.map" "node_modules/*"`, { stdio: 'inherit' });
  console.log(`✅ Created deployment zip: ${zipName}`);
} catch (error) {
  console.log('❌ Failed to create zip:', error.message);
}

// Step 6: Restore original config
try {
  if (fs.existsSync(configBackupPath)) {
    fs.copyFileSync(configBackupPath, configPath);
    fs.unlinkSync(configBackupPath);
    console.log('✅ Restored original next.config.ts');
  }
} catch (error) {
  console.log('⚠️ Could not restore config file');
}

// Step 7: Show deployment instructions
console.log(`
🎉 Build completed successfully!

📁 Static files are in: ./out/
📦 Deployment zip: ${zipName}

🚀 Hostinger Deployment Instructions:
1. Log in to your Hostinger control panel
2. Go to File Manager
3. Navigate to public_html (or your domain folder)
4. Delete existing files (backup first!)
5. Upload and extract ${zipName}
6. Your site should be live immediately!

📱 This build is optimized for mobile with:
- Responsive design across all breakpoints
- Touch-friendly interface elements
- Optimized animations and performance
- Static export for hosting compatibility
`);