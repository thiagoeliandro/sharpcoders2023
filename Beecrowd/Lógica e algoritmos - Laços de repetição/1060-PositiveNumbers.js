var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let sum = 0

for(let i = 1; i <= 6; i++) {
    let num = parseFloat(lines.shift())
    if(num > 0) {
        sum++
    }
}

console.log(`${sum} valores positivos`)