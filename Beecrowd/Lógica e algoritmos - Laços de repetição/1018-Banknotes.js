var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let banknotes = [100, 50, 20, 10, 5, 2, 1]
let amount = parseInt(lines.shift())
console.log(amount)

for(let i = 0; i < banknotes.length; i++) {
    let notesQty = parseInt(amount / banknotes[i])
    console.log(`${notesQty} nota(s) de R$ ${banknotes[i]},00`)
    amount %= banknotes[i]
}