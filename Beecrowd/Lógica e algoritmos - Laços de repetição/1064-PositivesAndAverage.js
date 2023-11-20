var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let positiveNumbers = 0
let sum = 0.0

for(let i = 1; i <= 6; i++) {
    let number = parseFloat(lines.shift())
    if(number > 0) {
        positiveNumbers++
        sum += number
    }
}

let media = parseFloat(sum / positiveNumbers)

console.log(`${positiveNumbers} valores positivos`)
console.log(media.toFixed(1))