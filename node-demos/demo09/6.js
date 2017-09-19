const fs = require('fs');

fs.watchFile('./README.md', (curr, prev) => {
  console.log(`the current mtime is: ${curr.mtime}`);
  console.log(`the previous mtime is: ${prev.mtime}`);
});

// fs.unwatchFile()用于取消监听
