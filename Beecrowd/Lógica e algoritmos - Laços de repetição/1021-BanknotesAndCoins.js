var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let amount = parseFloat(lines.shift())

console.log("NOTAS:")

let notes = parseInt(amount / 100)
console.log(`${notes} nota(s) de R$ 100.00`)
amount = amount % 100

notes = parseInt(amount / 50)
console.log(`${notes} nota(s) de R$ 50.00`)
amount = amount % 50

notes = parseInt(amount / 20)
console.log(`${notes} nota(s) de R$ 20.00`)
amount = amount % 20

notes = parseInt(amount / 10)
console.log(`${notes} nota(s) de R$ 10.00`)
amount = amount % 10

notes = parseInt(amount / 5)
console.log(`${notes} nota(s) de R$ 5.00`)
amount = amount % 5

notes = parseInt(amount / 2)
console.log(`${notes} nota(s) de R$ 2.00`)
amount = amount % 2

console.log("MOEDAS:")

let coins = amount / 1
console.log(`${Math.floor(coins)} moeda(s) de R$ 1.00`)
amount = amount % 1

coins = amount / 0.50
console.log(`${Math.floor(coins)} moeda(s) de R$ 0.50`)
amount = amount % 0.50

coins = amount / 0.25
console.log(`${Math.floor(coins)} moeda(s) de R$ 0.25`)
amount = amount % 0.25

coins = amount / 0.10
console.log(`${Math.floor(coins)} moeda(s) de R$ 0.10`)
amount = amount % 0.10

coins = amount / 0.05
console.log(`${Math.floor(coins)} moeda(s) de R$ 0.05`)
amount = amount % 0.05

coins = amount / 0.01
console.log(`${coins.toFixed(0)} moeda(s) de R$ 0.01`)
amount = amount % 0.01