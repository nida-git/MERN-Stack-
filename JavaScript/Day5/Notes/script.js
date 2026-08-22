// Intro to loops

for (let i = 0; i < 100; i++) {
  console.log("Hello");
} // 100 Hello

// Printing numbers from 1 to 5
for (let i = 0; i <= 5; i++) {
  console.log(i);
}
0;
// 1
// 2
// 3
// 4
// 5

// Print Odd Numbers from 1 to 15
for (let i = 1; i <= 15; i += 2) {
  console.log(i);
}

1;
// 3
// 5
// 7
// 9
// 11
// 13
// 15

// Print Even Numbers from 2 to 10
console.log("Print Even Numbers from 2 to 10");
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// Print Even Numbers from 2 to 10
// 2
// 4
// 6
// 8
// 10

console.log("Multiplication Table of 5");

for (let i = 0; i <= 10; i++) {
  console.log(`5 x ${i} = ${i * 5}`);
}
// Multiplication Table of 5
// 5 x 0 = 0
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50

console.log("Countdown from 10 to 1");

for (let i = 10; i > 0; i--) {
  console.log(i);
}
// Countdown from 10 to 1
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

// Nested for loops

for (let i = 1; i <= 3; i++) {
  console.log(`Outer loop ${i}`);
  for (let j = 1; j <= 4; j++) {
    console.log(`Inner loop ${j}`);
  }
}
// Outer loop 1
// Inner loop 1
// Inner loop 2
// Inner loop 3
// Inner loop 4
// Outer loop 2
// Inner loop 1
// Inner loop 2
// Inner loop 3
// Inner loop 4
// Outer loop 3
// Inner loop 1
// Inner loop 2
// Inner loop 3
// Inner loop 4

// Multiplication Table (1 to 5)

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${j * i} `);
  }
}
// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// 1 x 4 = 4
// 1 x 5 = 5
// 1 x 6 = 6
// 1 x 7 = 7
// 1 x 8 = 8
// 1 x 9 = 9
// 1 x 10 = 10
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10
// 2 x 6 = 12
// 2 x 7 = 14
// 2 x 8 = 16
// 2 x 9 = 18
// 2 x 10 = 20
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// 3 x 4 = 12
// 3 x 5 = 15
// 3 x 6 = 18
// 3 x 7 = 21
// 3 x 8 = 24
// 3 x 9 = 27
// 3 x 10 = 30
// 4 x 1 = 4
// 4 x 2 = 8
// 4 x 3 = 12
// 4 x 4 = 16
// 4 x 5 = 20
// 4 x 6 = 24
// 4 x 7 = 28
// 4 x 8 = 32
// 4 x 9 = 36
// 4 x 10 = 40
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50

// Pattern Printing - Right Triangle

let pattern = "";
for (let i = 0; i < 5; i++) {
  pattern += "*";
  console.log(pattern);
}

// 4: Number Grid
for (let i = 1; i <= 4; i++) {
  row = "";
  for (let j = 1; j <= 4; j++) {
    row += `(${i},${j})`;
  }
  console.log(row);
}

// Inverted Triangle Pattern


for(let i=5 ; i>0; i--){
  let pattern2 = ""
  for(let j = 1 ; j<=i ; j++ ){
  pattern2 += "*"
  }
  console.log(pattern2);
}

// While loop

// 2: Sum Numbers Until value Reached

let sum = 0;
let num= 1;
while(sum < 50){
  sum += num;
  console.log(`Added ${num} sum is now ${sum}`);
  num++
}

// Password validation

// let password = "VerySecret123"
// let userInput = prompt("Enter your password")
// let attempts = 0;
// while ( userInput !== password){
//   if (attempts < 5){
//      console.log("Wrong password try again");
//      userInput = prompt("Enter again: ")
//      attempts++
//   }else {
//     console.log("you ran out of attempts");
//     break;
//   }
// }

// Finding First Power of 2 Greater Than Value

let value = 1000;
let exponent = 0;
let ourValue = 0;
while(ourValue < value){
  ourValue = 2 ** exponent;
  exponent++;
}
console.log(ourValue);
console.log(`The first power of 2 greater than ${value} is ${exponent} `);


// do while .. 
// Dice Roll Until Six
 
let roll = 0
attempts = 1;
do{
  roll = Math.floor(Math.random()*6)+1
  attempts++
}while(roll !== 6)
console.log(`You got 6 at ${attempts} attempts`);

// counts atlest once
 let count = 0
 do{
  count++
 }while(count<0)
console.log(count); // 1

// ATM Withdrawal

let balance = 1000; 
let continueTransaction;

// do{
// let amount = Number(prompt(`balance is: ${balance} , Enter the amount to withdraw:`));

// if(amount>0 && amount<=balance){
//   balance -= amount;
//   console.log(`withdrew amount : ${amount} , new balance: ${balance}`);
// }else{
//   console.log("Invalid amount");
// }
// continueTransaction = prompt("do you want to continue transaction (yes/no)?")
// } while(continueTransaction === "yes" && balance > 0)
//  console.log(`final balance ${balance}`);

 // Break and continue

 for (let i = 1; i <= 100; i++) {
if (i % 7 === 0) {
console.log(`First number divisible by 7: ${i}`);
break; // Stop searching once found
}
}
// Output: First number divisible by 7: 7

// let correctPassword = "secret123";
// let maxAttempts = 3;
// for (let attempt = 1; attempt <= maxAttempts; attempt++) {
// let password = prompt(`Attempt ${attempt}: Enter password`);
// if (password === correctPassword) {
// console.log("Access granted!");
// break; // Exit loop on successful login
// } else if (attempt === maxAttempts) {
// console.log("Access denied. No more attempts.");
// } else {
// console.log("Wrong password. Try again.");
// }
// } 

for (let i = 0; i <= 5; i++) {
if (i === 3) {
continue; // Skip when i is 3
}
console.log(i);
}
// Output: 0, 1, 2, 4, 5 (3 is skipped)

for (let i = 1; i <= 10; i++) {
if (i % 2 !== 0) {
continue; // Skip odd numbers
}
console.log(i);
}
// Output: 2, 4, 6, 8, 10

let cities = ["London", "Paris", "Tokyo", "New York", "Sydney"];

for(let  i=0 ; i<cities.length ; i++){
  console.log(cities[i]);
}
// London
// Paris
// Tokyo
// New York
// Sydney

//Calculate Sum of Numbers
let scores = [85, 92, 78, 95, 88];

let sum2 = 0
for(let i = 0 ; i< scores.length ; i++){
  sum2 = sum2 + scores[i];
}
console.log("Final sum is: ", sum2);
console.log("hello");

// Iterationg over Arrays

// Reverse Print an Array

let colors = ["red", "green", "blue", "yellow"]
console.log("original order");
for(let i = 0; i<colors.length; i++ ){
  console.log(colors[i]);
}
console.log("reverse order");
for(let i = colors.length-1 ; i>0; i--){
  console.log(colors[i]);
}

// Nested arrays

let teams = [
["Alice", "Bob"],
["Charlie", "David"],
["Eve", "Frank"]
];

for(let i=0; i<teams.length; i++){
  for(let j=0; j<teams[i].length ; j++){
    console.log(teams[i][j]);
  }
}

// Matrix Addition

let matrix1 = [[1, 2], [3, 4]];
let matrix2 = [[5, 6], [7, 8]];
let result = [];

for(let i=0; i<matrix1.length; i++){
  result[i]=[]
  for(let j=0; j<matrix1[i].length; j++){
    result[i][j] = matrix1[i][j]+matrix2[i][j]
  }
}
console.log(result); //   [6, 8] [10, 12]

// For of loop

let colors2 = ["red", "green", "blue", "yellow"]

for (let color of colors2){
  console.log(color);
}

// Nested for...of with 2D Array

let departments = [
["Alice", "Bob", "Charlie"],
["David", "Eve"],
["Frank", "Grace", "Henry", "Ivy"]
];

for(let dept of departments){
  for(let names of dept){
    console.log(names);
  }
}

// Word Scramble Game

let words= ["javascript", "programming", "computer", "developer"]
let word = words[Math.floor(Math.random()*words.length)];
let scrambled = word.split("").sort(()=>Math.random()-0.5).join("");

console.log(`Unsramble this word ${scrambled}`);

let guess = ""
while(guess !== word){
  guess = prompt("Enter your answer").toLowerCase()

  if (guess === word){
    console.log("Correct");
  }else {
    console.log("try again");
  }
}
