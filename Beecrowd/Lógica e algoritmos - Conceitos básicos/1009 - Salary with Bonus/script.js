var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let sellerName = lines.shift()
let sellerFixedSalary = parseFloat(lines.shift())
let sellerTotalSales = parseFloat(lines.shift())

let finalSalary = sellerTotalSales * 0.15 + sellerFixedSalary

console.log(`TOTAL = R$ ${finalSalary.toFixed(2)}`)