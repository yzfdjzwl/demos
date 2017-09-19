let bin = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f]);
const bin2 = new Buffer('hello', 'utf-8');

const binString = bin.toString();
const binString2 = bin.toString('utf-8');

console.log(bin);
console.log(bin2);

console.log(binString);
console.log(binString2);

let sub = bin.slice(2);
console.log(sub);
sub[0] = 0x48;
console.log(bin);

let dump = new Buffer(bin.length);
bin.copy(dump);
dump[0] = 0x48;
console.log(bin);
console.log(dump);
