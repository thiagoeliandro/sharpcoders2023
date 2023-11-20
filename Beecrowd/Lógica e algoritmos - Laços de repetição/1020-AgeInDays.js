var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let daysAge = parseInt(lines.shift())

let years = parseInt(daysAge / 365)
daysAge %= 365
let months = parseInt(daysAge / 30)
let days = daysAge % 30

console.log(`${years} ano(s)`)
console.log(`${months} mes(es)`)
console.log(`${days} dia(s)`)