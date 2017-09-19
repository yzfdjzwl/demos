'use strict';

const fs = require('fs');

const data = 'Hello World...';
fs.writeFile('./temp/output1.md', data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('ok...');
  }
});

fs.writeFileSync('./temp/output2.md', data);
