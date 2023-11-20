var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let higher = -1
let pos = -1

for(let i = 1; i <= 100; i++) {
    let x = parseInt(lines.shift())
    if(x > higher) {
        higher = x
        pos = i
    }
}

console.log(higher)
console.log(pos)