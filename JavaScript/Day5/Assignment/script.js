/*Part A: for Loop Basics (15 points)

Problem 1: Print Numbers (3 points)

Write a for loop that prints all numbers from 1 to 10.
Expected Output:
1
2
3
...
10 */
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

/*Problem 2: Print Even Numbers (3 points)
Write a for loop that prints only even numbers from 2 to 20.
2
4
6
8
10
12
14
16
18
20 */

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

/* Problem 3: Countdown (3 points)
Write a for loop that counts down from 10 to 1, then prints "Blast off!".
Expected Output:
10
9
8
...
1
Blast off! */
for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log("Blast off!");

/* Problem 4: Multiplication Table (3 points)
Write a for loop that prints the multiplication table of 7 (from 7 × 1 to 7 × 10).
Expected Output:
7 × 1 = 7
7 × 2 = 14
7 × 3 = 21
...
7 × 10 = 70*/

for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${i * 7}`);
}

/* Problem 5: Sum of First N Numbers (3 points)
Write a for loop that calculates the sum of numbers from 1 to 20. Store the result in a variable called
sum and print it.
Expected Output:
Sum: 210 */

let sum = 0;
let n = 20;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);

/* Part B: Nested Loops (10 points)

Problem 6: Number Grid (5 points)
Use nested for loops to create a 4×4 grid of numbers like this:
Expected Output:

1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4
Hint: Outer loop controls rows, inner loop controls columns. */

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let i = 1; i <= 4; i++) {
    row += i;
  }
  console.log(row);
}

/* Problem 7: Right Triangle Pattern (5 points)

Use nested for loops to print this star pattern:
Expected Output:
*
* *
* * *
* * * *
* * * * *
Hint: In row 1, print 1 star. In row 2, print 2 stars. In row i , print i stars.*/
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

/* Part C: while and do...while Loops (10 points)

Problem 8: while Loop - Count to 5 (3 points)
Write a while loop that prints numbers from 1 to 5.
Expected Output:
1
2
3
4
5 */

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

/* Problem 9: while Loop - Sum Until Target (4 points)
Write a while loop that keeps adding numbers (1, 2, 3, 4...) to a sum until the sum reaches or exceeds
50. Print the final sum and how many numbers were added.

Expected Output:
Final sum: 55
Numbers added: 10 */

let sum_ = 0;
let n_ = 1;
while (sum_ < 50) {
  sum_ += n_;
  n_++;
}
console.log(`The Final sum is: ${sum_} and the number of numbers added : ${n_}`);

/* Problem 10: do...while Loop (Try this if didn't get, we will discuss this in
class) - Menu (3 points)
Write a do...while loop that displays a simple menu. The loop should continue until the user enters
"exit".

// Use prompt() to get user input
// Note: You can test this in browser console

Expected Behavior:
Display "Menu: Type 'hello' or 'exit'"
If user types "hello", log "Hello to you too!"
If user types "exit", log "Goodbye!" and stop
Loop continues until "exit" is entered */

// let userInput;
// do{
//     userInput = prompt("Type 'hello' or 'exit' : ")
//     if (userInput.toLowerCase() === "hello"){
//         console.log("Hello to you too!")
//     }else if (userInput.toLowerCase() === "exit"){
//         console.log("Goodbye!")
//     }

// }while(userInput !== "exit")

/* Part D: break and continue (10 points)

Problem 11: Using break (5 points)
Write a for loop that searches for the first number divisible by both 3 and 5 between 1 and 100. Use
break to stop once found.
Expected Output:
First number divisible by both 3 and 5: 15 */

for(let i = 1; i<=100 ; i++){
    if(i%3 === 0 && i % 5 === 0){
        console.log(`First number divisible by both 3 and 5 : ${i}`)
        break;
    }
}

/* Problem 12: Using continue (5 points)
Write a for loop that prints numbers from 1 to 10, but skips (doesn't print) numbers 3, 6, and 9. Use
continue .
Expected Output:

1
2
4
5
7
8
10 */
 
for(let i = 1; i<=10 ; i++){
    if(i %3 === 0){
        continue
    }
    console.log(i)
}

/* Part E: Iterating Over Arrays (15 points)

(Try this if didn't get, we will discuss this in class)
Problem 13: Print Array Elements (3 points)
Given the array below, use a for loop to print each city with its index.

let cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];
// Write your code here

Expected Output:
0: Mumbai
1: Delhi
2: Bangalore
3: Chennai
4: Kolkata */

let cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];
for(let i = 0; i<cities.length; i++){
  console.log(`${i}: ${cities[i]}`);
}

/* Problem 14: Sum of Array (4 points)
Given the array below, use a for loop to calculate and print the sum of all numbers.

let numbers = [10, 25, 30, 45, 20];

Expected Output:
Sum: 130*/

let numbers = [10, 25, 30, 45, 20];
let total = 0;
for(let i = 0; i<numbers.length; i++){
  total += numbers[i]
}
console.log("Sum: ",total);

/* Problem 15: Find Maximum in Array (4 points)

Given the array below, use a for loop to find and print the largest number.

let scores = [78, 92, 85, 99, 88, 76];

Expected Output:
Maximum score: 99*/

let scores = [78, 92, 85, 99, 88, 76];
let max = 0;

for(let i=0; i<scores.length; i++){
  if(scores[i]>max){
    max = scores[i]
  }
}
console.log(`Maximum score: ${max}`);

/* Problem 16: Nested Array Iteration (4 points)
Given the 2D array below, use nested for loops to print all player names.

let teams = [
["Alice", "Bob"],
["Charlie", "David"],
["Eve", "Frank"]
];

Expected Output:
Alice
Bob
Charlie
David
Eve
Frank */

let teams = [
["Alice", "Bob"],
["Charlie", "David"],
["Eve", "Frank"]
];

for(let i = 0; i<teams.length; i++){
  for(let j = 0; j<teams[i]; j++){
    console.log(teams[i][j]);
    console.log(teams[i][j]);
  }
}

console.log("hello");

/* Problem 17: Basic for...of (3 points)
Use a for...of loop to print each fruit from the array.

let fruits = ["Apple", "Banana", "Orange", "Mango"];

Expected Output:
Apple
Banana

Orange
Mango */

let fruits = ["Apple", "Banana", "Orange", "Mango"];
for (let fruit of fruits){
  console.log(fruit);
}

/* Problem 18: for...of with String (3 points)
Use a for...of loop to print each character of the string "LOOP" on a separate line.

let word = "LOOP";

Expected Output:
L
O
O
P*/

let word = "LOOP";

for(let letter of word){
  console.log(letter);
}

/* Problem 19: Count Vowels with for...of (4 points)
Use a for...of loop to count how many vowels (a, e, i, o, u) are in the sentence below. Print the
count.

let sentence = "JavaScript is awesome";
// Hint: Use .toLowerCase() and check if character is in "aeiou"

Expected Output:
Number of vowels: 8 */

let sentence = "JavaScript is awesome";
let count = 0;
for(let letter of sentence){
  for(let vowel of "aeiou" ){
    if(letter.toLowerCase() === vowel ){
      count++
    }

  }
}
console.log(count);
/* Part G: Challenge Problems (Bonus: 10 points)

Problem 20: FizzBuzz (5 points)
Write a for loop that prints numbers from 1 to 30. But:
For multiples of 3, print "Fizz" instead of the number
For multiples of 5, print "Buzz" instead of the number
For multiples of both 3 and 5, print "FizzBuzz"
Expected Output:

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz */

for(let i = 1; i<=30 ; i++){
  if(i%3=== 0 && i%5 === 0 ){
    console.log(i, "Fizz Buzz");
  }else if(i%3 === 0){
    console.log(i,"Fizz");
  }else if(i%5 === 0){
    console.log(i, "Buzz");
  }else{
    console.log(i);
  }
}

/* Problem 21: Reverse an Array (5 points)
Given the array below, use a for loop to create a new array with elements in reverse order. Do NOT use
built-in reverse methods.

let original = [10, 20, 30, 40, 50];
// Create a new array called 'reversed'

Expected Output:
Reversed array: [50, 40, 30, 20, 10]
Hint: Loop backwards through the original array and push elements to the new array. */

let original = [10, 20, 30, 40, 50];
let newArray = []

for (let i = original.length - 1 ; i>=0; i--){
  newArray.push(original[i])
}
console.log(newArray);
