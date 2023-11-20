var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let value = parseInt(lines.shift())

for(let i = 1; i <= value; i++) {
    if(i % 2 !== 0) {
        console.log(i)
    }
} 