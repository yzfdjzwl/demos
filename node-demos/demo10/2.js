const path = require('path');

const last = path.resolve('../demo09', '../node-demos', '..');
const last2 = path.resolve('../demo09', './temp', '..');
console.log(last);
console.log(last2);

/*
 * last
 * $ cd ../demo09
 * $cd ../node-demos
 * $ cd ..
 *
 * last2
 * $ cd ../demo09
 * $ cd temp
 * $ cd ..
*/
