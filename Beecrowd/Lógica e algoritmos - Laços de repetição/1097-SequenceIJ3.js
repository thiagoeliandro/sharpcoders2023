var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let v1 = 7
let v2 = 5

for(let i = 1; i <= 9; i += 2) {
    for(let j = v1; j >= v2; j--) {
        console.log(`I=${i} J=${j}`)
    }
    v1 += 2
    v2 += 2
}