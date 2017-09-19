const path = require('path');
const fs = require('fs');

console.log(`__dirname: ${__dirname}`);
console.log(`__filename: ${__filename}`);
console.log(`__filename.replace('1.js', 'test.js'): ${__filename.replace('1.js', 'test.js')}`)
console.log(`path.join(__dirname, 'test'): ${path.join(__dirname, 'test')}`);
console.log(`path.resolve('./'): ${path.resolve('./')}`);
console.log(`cwd(): ${process.cwd()}`);
console.log(path.resolve(__dirname, '../demo09/1.js'));

/*
 * cd ..
 * node demo10/1.js
 * Error: no such file or directory
 */
fs.readFile('../demo09/1.js', (err, data) => {
  if (err) return console.log(err);
  console.log(data);
});
