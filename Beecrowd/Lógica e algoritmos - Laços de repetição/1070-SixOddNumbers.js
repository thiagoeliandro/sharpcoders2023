var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let value = parseInt(lines.shift())

for(let i = 1; i <= 12; i++) {
    if(value % 2 !== 0) {
        console.log(value)
    }
    value++
}