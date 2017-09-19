const fs = require('fs');

const copy = (src, dst) => {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(src, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });

  promise
    .then((data) => {
      // data is a Buffer
      const string = data.toString();
      console.log(string);
    })
    .catch((err) => {
      console.log(err);
    });
};

const main = (argv) => {
  copy(argv[0], argv[1]);
};

main(process.argv.slice(2));
