var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let even = 0

for(let i = 1; i <= 5; i++) {
    let number = parseInt(lines.shift())
    if(number % 2 === 0) {
        even++
    }
}

console.log(`${even} valores pares`)