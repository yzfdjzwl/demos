## Demo05: Simple CLI: Copy

### Usage

```bash
$ node copy.js README.md README.md.backup
$ cat README.md.backup
```

`process` is a global variable, you can get CLI parameter by `process.argv`。Because `argv[0]` is `node` path, and `argv[1]` is `copy.js` path, we will use `process.argv.slice(2)`.
