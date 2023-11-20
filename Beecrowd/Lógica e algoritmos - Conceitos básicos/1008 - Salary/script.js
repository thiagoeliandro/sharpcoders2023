var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let employeeNumber = parseInt(lines.shift())
let employeeWorkedHours = parseInt(lines.shift())
let employeeValuePerHour = parseFloat(lines.shift())

let salary = employeeWorkedHours * employeeValuePerHour

console.log(`NUMBER = ${employeeNumber}`)
console.log(`SALARY = U$ ${salary.toFixed(2)}`)