const fs = require('fs');

fs.mkdir('./temp/try', 0777, (err) => {
  if (err) throw err;
});

fs.mkdir('./temp/try2', 0777);
