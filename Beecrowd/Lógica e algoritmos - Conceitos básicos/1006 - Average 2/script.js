var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = parseFloat(lines.shift())
let b = parseFloat(lines.shift())
let c = parseFloat(lines.shift())

a *= 2
b *= 3
c *= 5

let media = (a + b + c) / (2 + 3 + 5)

console.log(`MEDIA = ${media.toFixed(1)}`)