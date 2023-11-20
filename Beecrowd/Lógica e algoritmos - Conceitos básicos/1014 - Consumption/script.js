var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let x = parseInt(lines.shift())
let y = parseFloat(lines.shift())

let average = parseFloat(x / y)

console.log(`${average.toFixed(3)} km/l`)