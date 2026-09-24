// Extract text from an image using Tesseract.js OCR.
//
// Usage:
//   npm install             (installs tesseract.js)
//   node index.js <path-to-image>
//
// The extracted text is printed to the console.

const Tesseract = require('tesseract.js');

async function extractText(imagePath) {
  const {
    data: { text },
  } = await Tesseract.recognize(imagePath, 'eng');
  return text;
}

async function main() {
  const imagePath = process.argv[2];

  if (!imagePath) {
    console.error('Usage: node index.js <path-to-image>');
    process.exit(1);
  }

  try {
    const text = await extractText(imagePath);
    console.log(text.trim());
  } catch (err) {
    console.error('Failed to extract text:', err.message);
    process.exit(1);
  }
}

main();
