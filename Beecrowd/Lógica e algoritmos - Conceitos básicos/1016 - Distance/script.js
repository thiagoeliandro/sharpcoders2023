var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let distance = parseInt(lines.shift())

let minutes = distance * 2

console.log(`${minutes} minutos`)