var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let pi = 3.14159
let r = parseInt(lines.shift())
let volume = parseFloat((4/3) * pi * Math.pow(r, 3))

console.log(`VOLUME = ${volume.toFixed(3)}`)