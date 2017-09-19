## Demo02: Complex Package: A Complex Directory Config

### Usage

```bash
$ cd demo03
$ node use.js
```

When you `node use-package.js`, `node` will look up the `package.js`, and there is `main: ./lib/index.js`, so the main index is `./lib/index.js`. You will see `const main = require('./cat-package/')` in [use-package.js](./use-package.js).That's, `./lib/index.js` is `main` which in `const main = require('./cat-package/')`.
