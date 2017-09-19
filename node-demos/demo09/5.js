const process = require('process');
const fs = require('fs');

fs.readdir(process.cwd(), (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  let count = files.length;
  let results = {};
  files.forEach((filename) => {
    fs.readFile(filename, (err, data) => {
      const stat = fs.statSync(filename);
      if (!stat.isDirectory()) {
        results[filename] = data.toString();
        count--;
        if (count <= 1 ) {
          console.log('ok');
        }
      }
    });
  });

  console.log(files);
});
