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
