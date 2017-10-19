const fs = require('fs');
const PATH = './love4';

const walk = (path, callback) => {
  const files = fs.readdirSync(path);
  files.forEach((file, index) => {
    if (fs.statSync(`${path}/${file}`).isFile()) {
      callback(path, file, index);
    }
  });
};

const rename = (oldPath, newPath) => {
  fs.rename(oldPath, newPath, (error) => {
    if (error) {
      console.log(error);
    }
  });
};

walk(PATH, (path, file, index) => {
  const oldPath = `${path}/${file}`;
  const newPath = oldPath.replace(/.{5}\.jpeg/g, `yueff-${index}.jpeg`);
  rename(oldPath, newPath);
});
