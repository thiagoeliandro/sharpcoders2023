var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let x1y1 = lines.shift()
let x2y2 = lines.shift()

let p1 = x1y1.split(" ")
let p2 = x2y2.split(" ")

let x1 = parseFloat(p1[0])
let y1 = parseFloat(p1[1])

let x2 = parseFloat(p2[0])
let y2 = parseFloat(p2[1])

let distance = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2))

console.log(distance.toFixed(4))