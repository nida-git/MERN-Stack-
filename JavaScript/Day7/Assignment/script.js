/* Section 1: Introduction to Functions
Q1. Create a function called printPattern that prints the following pattern:
*
**
***
****
 */

function printPattern() {
  let row = "";
  for (let i = 1; i <= 5; i++) {
    row += "*";
    console.log(row);
  }
}
printPattern();

/* Q2. Create a function called studentInfo that prints:
"Name: John Doe"
"Age: 20"
"Course: JavaScript"
Each on a separate line. */

function studentInfo() {
  console.log("Name: John Doe");
  console.log("Age: 20");
  console.log("Course: JavaScript");
}
studentInfo();

/* Section 2: Functions with Arguments
Q1. Create a function called multiplyThree that accepts three numbers as arguments and prints their product.
Example:
multiplyThree(2, 3, 4); // Should print: 24
multiplyThree(5, 5, 2); // Should print: 50
*/

function multiplyThree(a, b, c) {
  let product = a * b * c;
  console.log(product);
}

multiplyThree(2, 3, 4); //  24
multiplyThree(5, 5, 2); // 50

/* Q2. Create a function called isEligibleToVote that accepts a person's name and age, then prints whether they are
eligible to vote (age 18 or above).
Example:
isEligibleToVote("Alice", 20); // Should print: Alice is eligible to vote
isEligibleToVote("Bob", 16); // Should print: Bob is not eligible to vote
*/

function isEligibleToVote(name, age) {
  if (age >= 18) {
    console.log(`${name} is eligible to vote`);
  } else {
    console.log(`${name} is not eligible to vote`);
  }
}

isEligibleToVote("Alice", 20);
isEligibleToVote("Bob", 16);

/* Section 3: The return Keyword 
Q1. Create a function called findLargest that accepts two numbers and returns the larger one. Then store the
result in a variable and print it.
Example:
let max = findLargest(10, 25);
console.log(max); // Should print: 25
*/

function findLargest(x, y) {
  if (x > y) {
    return x;
  }
  return y;
}

let max = findLargest(10, 25);
console.log(max);

/* Q2. Create a function called calculateDiscount that accepts an original price and discount percentage, then
returns the final price after discount.
Example: 
let finalPrice = calculateDiscount(100, 20);
console.log(finalPrice); // Should print: 80
let salePrice = calculateDiscount(500, 10);
console.log(salePrice); // Should print: 450 */

function calculateDiscount(originalPrice, discountPercentage){
    const discountAmount = originalPrice * (discountPercentage / 100)
    const finalPrice = originalPrice - discountAmount
    return finalPrice
}

let finalPrice = calculateDiscount(100, 20);
console.log(finalPrice); // 80

let salePrice = calculateDiscount(500, 10);
console.log(salePrice) // 450
