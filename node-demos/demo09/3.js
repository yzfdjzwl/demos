const fs = require('fs');
const PATH = './temp/temp';

fs.exists(PATH, (exists) => {
  if (exists) {
    console.log('hi, its here');
  } else {
    console.log(`no ${PATH}`);
  }
});

// if exist and delete it
if (fs.existsSync(PATH)) {
  console.log(`Removing ${PATH}`);
  fs.rmdirSync(PATH);
}
