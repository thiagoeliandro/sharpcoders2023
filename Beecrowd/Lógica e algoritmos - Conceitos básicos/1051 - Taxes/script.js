var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let salary = parseFloat(lines.shift())
let result = 0.0

if(salary <= 2000.00) {
    console.log("Isento")
}  
else if(salary <= 3000.00) {
    result = (salary - 2000.00) * 0.08
    console.log(`R$ ${result.toFixed(2)}`)
}
else if(salary <= 4500.00) {
    result = 1000.00 * 0.08 + (salary - 3000.00) * 0.18
    console.log(`R$ ${result.toFixed(2)}`)
}
else {
    result = 1000.00 * 0.08 + 1500.00 * 0.18 + (salary - 4500.00) * 0.28
    console.log(`R$ ${result.toFixed(2)}`)
}