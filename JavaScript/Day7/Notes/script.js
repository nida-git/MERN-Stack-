// Intro to functions

function sayHello(){
    console.log("Hello");
}
sayHello()

 // Function greet
 function greet(){
    console.log("Welcome to Javascript");
 }
 greet() // Welcome to Javascript

 // Show mesage
function showMessage(){
    console.log("Learning function");
}

// Functions with Arguments
 
function greetUser(user){
    console.log("Hello, ", user);
}
greetUser("Alice");
greetUser("Bob");

// Calculate sum of two numbers

function sum(a,b){
    let result = a + b
    console.log(result);
}

sum(3,8)
sum(10,20)

// Calculate Average of three numbers

function calcAverage(a,b,c){
    let sum = a + b + c
    avg = sum / 3;
    console.log(avg);
}

calcAverage(4,2,6)
calcAverage(64,27,85)

// Creating personalized message

function createMessage(userName, age){
    console.log(`My Name is ${userName} and I am ${age} years old`);
}
createMessage("john", 73)
createMessage("Sarah", 55)

// Calculate rectangle area

function calcArea(length, breadth){
    let area = length * breadth
    console.log("Area is ", area);
}

calcArea(4,7)

// The return Keyword

function funcSum(a,b){
    let result = a + b
    return result
    
}
// console.log(funcSum(5,4)); or 
let total = funcSum(4,9)
console.log(total);// 13

function multiply(a,b){
    let result = a * b
    return result
}

let product = multiply(4,2)
console.log(product);// 8

function test(){
    console.log("This line executes");
    return 10;
    console.log("This line will not run");
    return 22;

}
let returnValue = test()
console.log(`Retun value is : ${returnValue}`);

// using retrun value in calculation

function getData(){
    return 40;
}

let price = getData()
let tax = price * 0.1;
let totalPrice = price + tax
console.log(totalPrice);