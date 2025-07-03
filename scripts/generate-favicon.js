const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function generateFavicon() {
  try {
    const inputPath = path.join(__dirname, '..', 'public', 'damad-logo.png');
    const sizes = [16, 32, 48, 64, 96, 128, 192, 256, 384, 512];
    
    // Create favicon.ico (requires special handling)
    await sharp(inputPath)
      .resize(32, 32)
      .toFile(path.join(__dirname, '..', 'public', 'favicon.ico'));
    
    // Generate other sizes
    for (const size of sizes) {
      const outputPath = path.join(__dirname, '..', 'public', `favicon-${size}x${size}.png`);
      await sharp(inputPath)
        .resize(size, size)
        .toFile(outputPath);
    }
    
    // Create apple-touch-icon
    await sharp(inputPath)
      .resize(180, 180)
      .toFile(path.join(__dirname, '..', 'public', 'apple-touch-icon.png'));
    
    console.log('Favicon files generated successfully!');
  } catch (error) {
    console.error('Error generating favicon:', error);
  }
}

generateFavicon();
