var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


let pi = 3.14159
let r = parseFloat(lines.shift())
let a = pi * Math.pow(r, 2)

console.log(`A=${a.toFixed(4)}`)