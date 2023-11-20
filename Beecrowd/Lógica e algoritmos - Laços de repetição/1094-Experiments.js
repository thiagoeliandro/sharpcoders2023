var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let total = 0
let coelhos = 0
let ratos = 0
let sapos = 0

let n = parseInt(lines.shift())

for(let i = 0; i < n; i++) {
    let amount = lines.shift()
    let animals = amount.split(" ")
    
    if(animals[1] == "C") {
        coelhos += parseInt(animals[0])
    }
    else if(animals[1] == "R") {
        ratos += parseInt(animals[0])
    }
    else if(animals[1] == "S") {
        sapos += parseInt(animals[0])
    }
    total += parseInt(animals[0])
}

console.log(`Total: ${total} cobaias`)
console.log(`Total de coelhos: ${coelhos}`)
console.log(`Total de ratos: ${ratos}`)
console.log(`Total de sapos: ${sapos}`)

console.log(`Percentual de coelhos: ${parseFloat(coelhos*100/total).toFixed(2)} %`)
console.log(`Percentual de ratos: ${parseFloat(ratos*100/total).toFixed(2)} %`)
console.log(`Percentual de sapos: ${parseFloat(sapos*100/total).toFixed(2)} %`)