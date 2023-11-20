var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines.shift())
let dentro = 0
let fora = 0

for(let i = 0; i < n;  i++) {
    let x = parseInt(lines.shift())
    x >= 10 && x <= 20? dentro++ : fora++
}

console.log(`${dentro} in`)
console.log(`${fora} out`)