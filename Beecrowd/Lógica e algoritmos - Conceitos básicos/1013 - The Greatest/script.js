var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = lines.shift()
let numbers = n.split(" ")

let a = parseInt(numbers[0])
let b = parseInt(numbers[1])
let c = parseInt(numbers[2])

let maiorAb = (a + b + Math.abs(a - b)) / 2
let greatestOne = (maiorAb + c + Math.abs(maiorAb - c)) / 2

switch(greatestOne){
case a:
    console.log(`${a} eh o maior`)
    break;
case b:
    console.log(`${b} eh o maior`)
    break;
default:
    console.log(`${c} eh o maior`)
    break;
}