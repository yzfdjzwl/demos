const fs = require('fs');

// createReadStream()用于打开大型的文本文件
const readLines = (input, callback) => {
  let remaining = '';

  input.on('data', (data) => {
    remaining += data;
    let tail = remaining.indexOf('\n');
    let head = 0;

    while (tail > -1) {
      let line = remaining.slice(head, tail);
      head = tail + 1;
      callback(line);
      tail = remaining.indexOf('\n', head);
    }

    remaining = remaining.slice(head);
  });

  input.on('end', () => {
    if (remaining.length > 0) {
      callback(remaining);
    }
  });
};

const func = (data) => {
  console.log(`Line: ${data}`);
};

const input = fs.createReadStream('README.md');
readLines(input, func);
