// Bu geçici bir çözüm, sonra gerçek ikonlarla değiştirin
const fs = require('fs');

const svgIcon = `
<svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1024" height="1024" fill="#e63f5b"/>
  <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white" font-size="400" font-family="Arial" font-weight="bold">SM</text>
</svg>
`;

// SVG placeholder oluştur
fs.writeFileSync('assets/icon.svg', svgIcon);
console.log('Placeholder icons created!');