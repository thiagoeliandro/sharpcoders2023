var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let duration = parseInt(lines.shift())

let hours = parseInt(duration / 3600)
duration %= 3600
let minutes = parseInt(duration / 60)
let seconds = duration % 60

console.log(`${hours}:${minutes}:${seconds}`)