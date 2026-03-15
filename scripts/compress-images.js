const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = path.join(process.cwd(), 'public/images/backgroundImage.jpg');
const outputPath = path.join(process.cwd(), 'public/images/backgroundImage.webp');

async function convertImage() {
  try {
    console.log('Starting compression of backgroundImage.jpg...');
    await sharp(inputPath)
      .webp({ quality: 80 }) // 80 is a good balance between quality and size
      .toFile(outputPath);
    
    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    
    console.log(`Success! Original size: ${(inputStats.size / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`New size: ${(outputStats.size / 1024).toFixed(2)} KB`);
    console.log(`Compression ratio: ${((1 - outputStats.size / inputStats.size) * 100).toFixed(2)}% reduction`);
  } catch (error) {
    console.error('Error during conversion:', error);
  }
}

convertImage();
