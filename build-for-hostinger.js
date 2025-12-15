#!/usr/bin/env node
/**
 * Build script for Hostinger Shared Hosting
 * This script prepares the app for static export and builds it
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Building Diligence Labs for Hostinger Shared Hosting...\n');

// Step 1: Backup current next.config.ts
const configPath = path.join(__dirname, 'next.config.ts');
const configBackupPath = path.join(__dirname, 'next.config.backup.ts');

try {
  const currentConfig = fs.readFileSync(configPath, 'utf8');
  fs.writeFileSync(configBackupPath, currentConfig);
  console.log('✅ Backed up current Next.js config');
} catch (error) {
  console.log('⚠️  Could not backup config, continuing...');
}

// Step 2: Create static export config
const staticConfig = `import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export configuration for shared hosting
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  experimental: {
    optimizePackageImports: ['framer-motion', 'lenis', 'react-calendly']
  },
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/webp', 'image/avif'],
  },
  typescript: {
    ignoreBuildErrors: false,
  }
};

export default nextConfig;`;

fs.writeFileSync(configPath, staticConfig);
console.log('✅ Updated Next.js config for static export');

// Step 3: Temporarily move API routes if they exist
const apiPath = path.join(__dirname, 'src/app/api');
const apiDisabledPath = path.join(__dirname, 'src/app/api-disabled');

if (fs.existsSync(apiPath)) {
  try {
    fs.renameSync(apiPath, apiDisabledPath);
    console.log('✅ Temporarily disabled API routes');
  } catch (error) {
    console.log('⚠️  Could not move API routes, they may already be disabled');
  }
}

// Step 4: Build the project
try {
  console.log('\n🔨 Building static export...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Step 5: Create deployment package
try {
  console.log('\n📦 Creating deployment package...');
  execSync('cd out && zip -r ../diligence-labs-hostinger-ready.zip .', { stdio: 'inherit' });
  console.log('✅ Deployment package created: diligence-labs-hostinger-ready.zip');
} catch (error) {
  console.log('⚠️  Could not create zip file. Manually zip the contents of the "out" folder.');
}

// Step 6: Restore original configuration
try {
  if (fs.existsSync(configBackupPath)) {
    const originalConfig = fs.readFileSync(configBackupPath, 'utf8');
    fs.writeFileSync(configPath, originalConfig);
    fs.unlinkSync(configBackupPath);
    console.log('✅ Restored original Next.js config');
  }
} catch (error) {
  console.log('⚠️  Could not restore original config');
}

// Step 7: Restore API routes
if (fs.existsSync(apiDisabledPath)) {
  try {
    fs.renameSync(apiDisabledPath, apiPath);
    console.log('✅ Restored API routes');
  } catch (error) {
    console.log('⚠️  Could not restore API routes');
  }
}

console.log('\n🎉 Hostinger deployment package ready!');
console.log('\n📋 Next Steps:');
console.log('1. Upload "diligence-labs-hostinger-ready.zip" to Hostinger File Manager');
console.log('2. Extract the zip file in your public_html folder');
console.log('3. Delete the zip file after extraction');
console.log('4. Enable HTTPS in Hostinger control panel');
console.log('5. Visit your domain to test the deployment');
console.log('\n📖 See HOSTINGER_SHARED_HOSTING_DEPLOY.md for detailed instructions');