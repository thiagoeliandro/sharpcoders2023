var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = parseInt(lines.shift())
let b = parseInt(lines.shift())
let c = parseInt(lines.shift())
let d = parseInt(lines.shift())

let result = a * b - c * d

console.log(`DIFERENCA = ${result}`)