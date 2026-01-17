#!/usr/bin/env node

const { platform, arch } = process;

// Note: This script only performs a basic compatibility check.
// All platform/architecture detection happens at runtime in paws.js
// to avoid permission issues during npm install.

const SUPPORTED_PLATFORMS = {
  darwin: ['x64', 'arm64'],
  linux: ['x64', 'arm64'],
  win32: ['x64', 'arm64'],
  android: ['arm64']
};

function install() {
  console.log(`📦 Installing paws for ${platform}/${arch}...`);

  // Basic platform check
  if (!SUPPORTED_PLATFORMS[platform]) {
    console.warn(`⚠️  Warning: Platform '${platform}' might not be supported.`);
    console.warn('Supported platforms: darwin, linux, win32');
  } else if (!SUPPORTED_PLATFORMS[platform].includes(arch)) {
    console.warn(`⚠️  Warning: Architecture '${arch}' on '${platform}' might not be supported.`);
    console.warn(`Supported architectures for ${platform}: ${SUPPORTED_PLATFORMS[platform].join(', ')}`);
  } else {
    console.log(`✅ System compatible: ${platform}/${arch}`);
  }
  
  console.log("✨ Paws installed successfully. Run 'paws' to start.");
}

install();
