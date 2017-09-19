'use strict';

const fs = require('fs');

fs.readFile('README.md', 'utf-8', (err, data) => {
  if (err) console.log(err);

  // 拆分为数组
  data.split(/\r?\n/).forEach(line => {
    console.log(`${line}...`);
  });
});


const data = fs.readFileSync('README.md', 'utf-8');
console.log(data);
