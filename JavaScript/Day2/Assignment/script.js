// Problem 1 
 
// let firstName ;  // Valid 
// let 2ndPlace _;  // Invalid "cannot start with number"
// let user_email ; //Valid
// let total--price ; // Invalid
// let $amount ; // valid
// let my variable ; // Invalid "space not allowed"
// let _privateData ; // Valid
// let let; // Invalid "reserved keyword"


// Current (incorrect or non-standard)
/*let user name = "Alice";
let 1stprize = 1000;
let total--cost = 250;
let USERAGE = 25; */

// Corrected version
 let userName = "Alice";
 let firstPrize = 1000;
let totalCost = 250;
let userAge = 25;

// Problem 3: Naming Convention Practice

let userEmail = "john@example.com";

let isLoggedIn = true;

// Store the maximum number of attempts
const maxAttempts = 3;

// Store a student's final grade
let finalGrade = 85;

// Store a product's price in dollars
let product$Price = 99.99;

// Problem 4: Boolean Practice

// Create a variable for "is it raining?" - Set it to false
let isItRaining = false ;

// Create a variable for "is the user an adult?" (age >= 18) - Set it to true
let isUserAdult = true ;

// Create a variable for "does the password match?" - Set it to false
let isPasswordMatched = false;

// Problem 5: Dynamic Typing

let x = 10;
console.log(typeof x); // Prediction:number 
//output: number

x = "Hello";
console.log(typeof x); // Prediction: string
//output string

//Problem 6: String Indexing

let language = "JavaScript";

// What is the first character?
language[0] = "J"
// What is the character at index 4?
language[4] = "S"
// What is the last character? (use length)
language[length-1] = "t"
// What is the length of the string?
console.log(language.length) // 10
language.length = 10



// Problem 7: String Creation

// Create a string with double quotes
let message1 = "This is a string with double quotes";
// Create a string with single quotes that says: It's a sunny day
let message2 = 'It\'s a sunny day';
// Create a string with double quotes that says: He said, "Hello!"
let message3 = "He said, \" Hello! \"";
console.log(message1 , message2 , message3) // This is a string with double quotes It's a sunny day He said, " Hello! "

// String Concatenation

let firstName = "John";
let lastName = "Doe";
// Concatenate to create "John Doe"
let fullName = firstName + " " + lastName;
// Create a message: "Hello, John Doe!"
let greeting = "Hello, " + firstName + " " + lastName;
let age = 25;
// Create: "John is 25 years old"
let info = firstName + " is "+ age + "years old";
console.log(fullName)
console.log(greeting)

// Template Literal Practice
let cityName = "Paris";
let temperature = 25;
// Create: "The temperature in Paris is 25 degrees."
let weather = `The temperature in ${cityName} is ${temperature} degrees`;
console.log(weather) // The temperature in Paris is 25 degrees

let hourOfDay = 14;
let userName2 = "Bob";
// Create: "Good afternoon, Bob! It's 14:00."
let greeting2 = `Good afternoon, ${userName2}! It's ${hourOfDay}:00` ;
console.log(greeting2) // Good afternoon, Bob! It's 14:00

// Null vs Undefined

// A variable declared but not assigned
let score;
console.log(score); // Output: undefined
// A variable intentionally set as empty
let winner = null;
console.log(winner); // Output: null
// Accessing a non-existent property
let user = { name: "Alice" };
console.log(user.age); // Output: undefined

// Comparison Operators

console.log(10 > 5); // true
console.log(3 < 2); // false
console.log(5 >= 5); // true
console.log(8 <= 10); // true
console.log(7 != 7); // false
console.log(15 > 20); // false

// Write Comparisons

console.log("Write Comparisons")

let age3 = 18;
// Write a comparison that returns true (age is greater than or equal to 18)
console.log(age3 >= 18 )// true
let temperature2 = 30;
// Write a comparison that returns true (temperature is greater than 25)
console.log(temperature2 > 25) // true
let score3 = 75;
// Write a comparison that returns false (score is less than 60)
console.log(score3 < 60) // false

// loose vs strict 
console.log("loose vs strict comparison")
console.log(5 == 5); // true
console.log(5 === 5); // true
console.log(5 == "5"); // true
console.log(5 === "5"); // false
console.log(true == 1); // true
console.log(true === 1); // false
console.log(0 == false); // true
console.log(0 === false); // false

// Rewrite these comparisons using strict equality (===):
console.log("fix the code");
// Current code with loose equality
let userInput = "10";
if (userInput == 10) {
console.log("Input is 10");
} //Input is 10
// Your corrected version with strict equality:
let userInput2 = "10";
if (userInput2 === 10) {
console.log("Input is 10");
}

console.log("String Comparison");
// String Comparison Prediction

console.log('a' > 'A'); // true
console.log('b' < 'c'); // true
console.log('apple' < 'banana'); // true
console.log('Z' < 'a'); // true
console.log("10" < "2"); // true

console.log("Case-Insensitive Comparison");

let str1 = "Hello";
let str2 = "HELLO";
// Write a comparison that returns true (comparing in lowercase)

console.log(str1.toLowerCase == str2.toLowerCase);