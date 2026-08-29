// Intro to functions

function sayHello() {
  console.log("Hello");
}
sayHello();

// Function greet
function greet() {
  console.log("Welcome to Javascript");
}
greet(); // Welcome to Javascript

// Show mesage
function showMessage() {
  console.log("Learning function");
}

// Functions with Arguments

function greetUser(user) {
  console.log("Hello, ", user);
}
greetUser("Alice");
greetUser("Bob");

// Calculate sum of two numbers

function sum(a, b) {
  let result = a + b;
  console.log(result);
}

sum(3, 8);
sum(10, 20);

// Calculate Average of three numbers

function calcAverage(a, b, c) {
  let sum = a + b + c;
  avg = sum / 3;
  console.log(avg);
}

calcAverage(4, 2, 6);
calcAverage(64, 27, 85);

// Creating personalized message

function createMessage(userName, age) {
  console.log(`My Name is ${userName} and I am ${age} years old`);
}
createMessage("john", 73);
createMessage("Sarah", 55);

// Calculate rectangle area

function calcArea(length, breadth) {
  let area = length * breadth;
  console.log("Area is ", area);
}

calcArea(4, 7);

// The return Keyword

function funcSum(a, b) {
  let result = a + b;
  return result;
}
// console.log(funcSum(5,4)); or
let total = funcSum(4, 9);
console.log(total); // 13

function multiply(a, b) {
  let result = a * b;
  return result;
}

let product = multiply(4, 2);
console.log(product); // 8

function test() {
  console.log("This line executes");
  return 10;
  console.log("This line will not run");
  return 22;
}
let returnValue = test();
console.log(`Retun value is : ${returnValue}`);

// using retrun value in calculation

function getData() {
  return 40;
}

let price = getData();
let tax = price * 0.1;
let totalPrice = price + tax;
console.log(totalPrice);

// Return String

function getGreeting(name) {
  return "Hello " + name;
}

let mesage = getGreeting("Alice");
console.log(mesage); // Hello Alice

console.log(getGreeting("Bob")); // Hello Bob

// Understanding Scope

function showScore() {
  let score = 88;
  console.log(score); // Works
}

showScore();
// console.log(score);// Error

// Each funtion has own scopte

function func1() {
  let x = 10;
  console.log(x);
}

function func2() {
  let x = 20;
  console.log(20);
}

func1();
func2();

// Block Scope

// with if
if (true) {
  let temp = "hello";
  console.log(temp); // hello
}
// console.log(temp);// Cannot access

// with loop

for (let i = 1; i < 5; i++) {
  console.log(i); // 1 2 3 4
}
// console.log(i);// Error

// with curly braces

{
  let secret = "Hidden";
  console.log(secret); // Hidden
}
// console.log(secret); // Error secret is not defined

// Lexical scope

function outerFunc() {
  let x = 35;

  function innerFunc() {
    console.log(x);
  }
  innerFunc();
}
outerFunc();

// Multi level nesting

function level1() {
  let x = 5;

  function level2() {
    let y = 10;

    function level3() {
      console.log(x);
      console.log(y);
    }

    level3();
  }

  level2();
}
level1();

// outer cannot acces inner function variables

function outer() {
  function inner() {
    let a = 29;
  }
  inner();
  // console.log(a); // Error a is not defined
}
outer();

// outer parameter in inner function

function createMessage(name) {
  function greet() {
    return "Hello " + name;
  }
  function farewell() {
    return "Bye " + name;
  }
  console.log(greet());
  console.log(farewell());
}
createMessage("john");

// Function Expression

const multiplication = function (a, b) {
  return a * b;
};
console.log(multiplication(2, 4));

// Higher order funcetions

function repeatTask(func, n) {
  for (let i = 1; i <= n; i++) {
    func();
  }
}

const alertUser = () => {
  console.log("Alert!");
};

repeatTask(alertUser, 4);

// Example 2

function applyDiscount(price, discountFunc) {
  return discountFunc(price);
}

const tenPercent = (price) => price * 0.9;
const twentyPercent = (price) => price * 0.8;

console.log(applyDiscount(1000, tenPercent));
console.log(applyDiscount(1000, twentyPercent));

// Example 3

function calculate(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;

console.log(calculate(4, 6, mul));

// function returnMultipleValues(){
//     let a = 5
//     let b = 6
//     let c = 9

//     return [ a , b , c]
// }

// let result = returnMultipleValues()
// console.log(result)

// Methods

const car = {
  brand: "Tesla",
  start: function () {
    console.log("Engine start");
  },
  stop: function () {
    console.log("Engine stop");
  },
};

car.start();
console.log(car.brand);
car.stop();

// Modern shorthand

const mathTools = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};
console.log(mathTools.add(5, 3)); // 8
console.log(mathTools.subtract(10, 4));// 6
