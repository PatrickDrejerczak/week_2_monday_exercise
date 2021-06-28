// Section 2

let pi = 3.14;
let radius = 7;
let circleArea = pi*radius**2


console.log("Area of Circle")
console.log(typeof(pi))
console.log(typeof(radius))
console.log(`The area of the circle is ${circleArea}`)

// Section 3

10 + 24    = 34
"10" + "24" =1024
"Hello" + " " + 2021 = Hello 2021
1 + 2 * 3 = 7
(1 + 3) ** 2 =16
1 / 0 = infinity
6 % 2 = 0
5.5 % 2 = 1.5
Number("123") = number
typeof(1 + "") = string



console.log(5 == "5")      = True
console.log(5 === "5")     = False
console.log(8 != 8.0)      = False
console.log(8 !== 8.0)     = False
console.log(4 <= 4.0)      = True
console.log("true" === true)  = False
console.log(true && true)     = True
console.log(true && false)    = False
console.log(false && false)   = False
console.log(true || true)     = True
console.log(false || true)    = True
console.log(!true)            = False
console.log(!false)           = True
console.log(false && (true || true))  = False
console.log(false && true || true)    = True

// Section 4

let x = 5

if (x > 0) {
  console.log(`${x} is a positive number.`)
} else if (x < 0) {
  console.log(`${x} is a negative number.`)
} else if (x == 0) {
  console.log(`${x} is zero.`)
}

let a = 48
let b = 67
let c = 1

if (a > b && b > c){
  console.log(`${c} is the smallest number, and ${a} is the biggest number between ${c}, ${b}, ${a}`);
}

if (a > c && c > b){
  console.log(`${b} is the smallest number, and ${a} is the biggest number between ${b}, ${c}, ${a}`);
}

if (c > b && b > a){
  console.log(`${a} is the smallest number, and ${c} is the biggest number between ${a}, ${b}, ${c}`);
}

if (c > a && a > b){
  console.log(`${b} is the smallest number, and ${c} is the biggest number between ${b}, ${a}, ${c}`);
}

if (b > a && a > c){
  console.log(`${c} is the smallest number, and ${b} is the biggest number between ${c}, ${a}, ${b}`);
}

if (b > c && c > a){
  console.log(`${a} is the smallest number, and ${b} is the biggest number between ${a}, ${c}, ${b}`);
}


// Section 5

for (let e = 1; e <= 5; e++) {
  console.log(e);
}

for (let e = 7; e >= 4; e--) {
  console.log(e);
}



let numbera = 0;
let numberb = 1;

function numberSum(numbera, numberb) {
  var total = 0;
    for(var i = numbera; i <= numberb; i++){
      total += i;
    }
    console.log(total);
    return total;
}

numberSum(1, 3)



var value = 1234,
    sum = 0;

function sumNumbers(value){
  while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
 }
    console.log(sum);
}

sumNumbers(8173)


// Section 6

function itWorks() {
  console.log("Wow, it works!")
}

itWorks()

function favoriteMovie() {
  console.log("My favorite movie is Orange")
}

favoriteMovie()

function myName(me){
  console.log("My name is " + me + ".")
}

myName("Patrick")

let number1 = 1
let number2 = 2

function calculateNumbers(number1, number2) {
  for (number1 <= number2; number1++) {
  console.log(number1);
}
}

calculateNumbers(1, 5)


// Section 7

let t = 111
let u = 999
let p = 0

console.log(t + " " + u)

p = t
t = u 
u = p

console.log(t + " " + u)

// Section 8

console.log(Math.floor(Math.random() * 2));
console.log(Math.floor(Math.random() * 11));