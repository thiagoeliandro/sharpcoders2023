var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let prod1 = lines.shift()
let prod2 = lines.shift()

let productOne = prod1.split(" ")
let productTwo = prod2.split(" ")

let totalProd1 = parseFloat(productOne[1] * productOne[2])
let totalProd2 = parseFloat(productTwo[1] * productTwo[2])
let total = totalProd1 + totalProd2

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)