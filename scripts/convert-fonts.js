const { compress, decompress } = require('wawoff2');
const fs = require('fs');
const path = require('path');

const fontsDir = path.join(process.cwd(), 'src/fonts');

async function convertFonts() {
  const woffFiles = fs.readdirSync(fontsDir).filter(f => f.endsWith('.woff') && !f.endsWith('.woff2'));

  for (const file of woffFiles) {
    const inputPath = path.join(fontsDir, file);
    const outputPath = path.join(fontsDir, file.replace('.woff', '.woff2'));

    const woffBuffer = fs.readFileSync(inputPath);

    // Step 1: Decompress WOFF → raw TTF/OTF
    const ttfBuffer = await decompress(woffBuffer);

    // Step 2: Compress raw TTF/OTF → WOFF2
    const woff2Buffer = await compress(ttfBuffer);

    fs.writeFileSync(outputPath, woff2Buffer);

    const inputSize = (woffBuffer.length / 1024).toFixed(2);
    const outputSize = (woff2Buffer.length / 1024).toFixed(2);
    const reduction = ((1 - woff2Buffer.length / woffBuffer.length) * 100).toFixed(2);

    console.log(`${file}: ${inputSize} KB → ${outputSize} KB (${reduction}% reduction)`);
  }

  console.log('\nAll fonts converted successfully!');
}

convertFonts();
