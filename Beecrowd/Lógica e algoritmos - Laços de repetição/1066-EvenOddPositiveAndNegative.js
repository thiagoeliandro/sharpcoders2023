var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let even = 0
let odd = 0
let positive = 0
let negative = 0

for(let i = 1; i <= 5; i++) {
    let x = parseInt(lines.shift())
    x % 2 === 0? even++ : odd++
    if(x !== 0){
    x > 0? positive++ : negative++
    }
}

console.log(`${even} valor(es) par(es)`)
console.log(`${odd} valor(es) impar(es)`)
console.log(`${positive} valor(es) positivo(s)`)
console.log(`${negative} valor(es) negativo(s)`)