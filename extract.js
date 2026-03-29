  const fs = require('fs');
const svg = fs.readFileSync('public/images/abhyankars_ias_logo.svg', 'utf-8');
const match = svg.match(/data:image\/png;base64,([^"]+)/);
if (match && match[1]) {
  const buffer = Buffer.from(match[1], 'base64');
  fs.writeFileSync('src/app/icon.png', buffer);
  fs.writeFileSync('src/app/favicon.ico', buffer); // Fallback copy for strict browsers like Chrome
  console.log('Successfully wrote icon.png and favicon.ico');
} else {
  console.log('Failed to extract base64');
}
