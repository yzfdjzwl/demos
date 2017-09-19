'use strict';

const fs = require('fs');

fs.stat('README.md', (err, stat) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`isFile: ${stat.isFile()}`);
    console.log(`isDirectory: ${stat.isDirectory()}`);
    console.log(`size: ${stat.size}`);
    console.log(`birth time: ${stat.birthtime}`);
    console.log(`modified time: ${stat.mtime}`);
  }
});
