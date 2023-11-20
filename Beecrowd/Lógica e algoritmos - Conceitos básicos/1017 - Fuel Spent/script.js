var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let kml = 12
let hours = parseInt(lines.shift())
let averageSpeed = parseInt(lines.shift())

let total = parseFloat(averageSpeed / kml * hours)

console.log(`${total.toFixed(3)}`)