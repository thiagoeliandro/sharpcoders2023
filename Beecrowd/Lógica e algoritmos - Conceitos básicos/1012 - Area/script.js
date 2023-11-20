var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = lines.shift()
let numbers = n.split(" ")

let a = parseFloat(numbers[0])
let b = parseFloat(numbers[1])
let c = parseFloat(numbers[2])

let triangle = a * c / 2
let circle = 3.14159 * Math.pow(c, 2)
let trapezium = (a + b) * c / 2
let square = Math.pow(b, 2)
let rectangle = a * b

console.log(`TRIANGULO: ${triangle.toFixed(3)}`)
console.log(`CIRCULO: ${circle.toFixed(3)}`)
console.log(`TRAPEZIO: ${trapezium.toFixed(3)}`)
console.log(`QUADRADO: ${square.toFixed(3)}`)
console.log(`RETANGULO: ${rectangle.toFixed(3)}`)