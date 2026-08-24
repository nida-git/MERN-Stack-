// Methods 
let username = "    coding_wizard    "
let clean = username.trim();
console.log(clean); // coding_wizard

let input = "    "
let trimmed = input.trim()
console.log(input.trim()); // 
console.log(typeof trimmed);

// strings are Immutable

let message = "Hello I am a string"
let upper = message.toUpperCase()
let lower = message.toLowerCase()
console.log(upper); //HELLO I AM A STRING
console.log(lower); // hello i am a string
console.log(message); //  Hello I am a string

// /CASE cONVERSION methods

let mixed = "HelLo WoRLd"
console.log(mixed.toLowerCase());
console.log(mixed.toUpperCase());
 

//String methods with Arguments

let sentence = "Hello World";
console.log(sentence.indexOf("W"));//6

let word = "JavaScript"
console.log(word.indexOf("java")); // -1
console.log(word.indexOf("Java")); // 0

// Method Chaining

let input2 = "   JAVASCRIPT  "
let clean2 = input2.trim().toLowerCase().slice(0,4);
console.log(clean2); // java

let text = "  Hello World"
let output = text.trim().toUpperCase().replace("HELLO" ,"HI")
console.log(output);// HI WORLD

// Slicing Strings

let word2 = "Mountains"
console.log(word2.slice(0,5));// Mount
console.log(word2.slice(5));// ains

let name = "Alexander"
console.log(name.slice(0,1));// A
console.log(name.slice(-1));// r

let greet = "Good Morning"
console.log(greet.slice(0,4));// Good
console.log(greet.slice(4,0)); // ""

console.log(greet.slice(-1,-5)); // ""
console.log(greet.slice(-5,-1));// rinin

// Replacing Substrings

let fruit = "I love apple pie"
console.log(fruit.replace("apple", "cherry")); // I love cherry pie
console.log(fruit.replaceAll("apple", "Pine Apple"));  // I love Pine Apple pie

let text2 = "I love apple pie and apple juice"
console.log(text2.replace("apple", "orange"));// I love orange pie and apple juice
console.log(text2.replaceAll("apple", "orange")); // I love orange pie and orange juice

let sentence2 = "Hello World"
console.log(sentence2.replace(" ", "-"));// Hello-World

let str = "javascript"
let result = str.trim().replace("java", "type")
console.log(result);// typescript

// Intro to arrays

//creating array
let colors = ["red", "green", "blue"]
console.log(colors);//  ['red', 'green', 'blue']

// Accessing array elements
let fruits = ["apple" , "mango" , "banana", "orange", "grapes"]
console.log(fruits[1]);// mango
console.log(fruits[4]);// grapes

// Array with different datatypes
let mixed2 = ["hello", 42 , true, 3.14]
console.log(mixed2[2]);// true
console.log(mixed2[3]);//3.14

// Array lenth property

let numbers = [10, 20 , 30, 40 ,50]
console.log(numbers.length);// 5

// Accessing last element

let items = ["first", "secong", "third", "fourth"]
let lastIndex = items.length - 1;
console.log(items[lastIndex]);// fourth

//Basic slicing
let numbers1 = [1, 2, 3, 4, 5];
let sliced = numbers1.slice(1, 4);
console.log(sliced); // [2, 3, 4]

 // Using negative indices
let letters = ["a", "b", "c", "d", "e"];
console.log(letters.slice(-2)); // ["d", "e"] (last 2)

// Splice 
let colors1 = ["red", "green", "blue", "yellow", "purple"];
// let removed = colors1.splice(1, 2);
console.log("hello");
colors1.splice(1,3)
console.log(colors1);
// console.log(removed); // ["green", "blue"]
console.log(colors1); // ["red", "yellow", "purple"]

// Inserting multiple elements without deletion
let arr = [1, 5];
arr.splice(1, 0, 2, 3, 4);
console.log(arr); // [1, 2, 3, 4, 5]

let arr2 = [4,2,8,9,5,34,57]
arr2.splice(4,0,50,32,56)
console.log(arr2);

// Sorting 
let fruits1 = ["banana", "apple", "mango", "cherry"];
fruits1.sort();
console.log(fruits1); 

let scores = [85, 92, 78, 95, 88];
scores.sort((a, b) => a - b);
console.log(scores); // [78, 85, 88, 92, 95]

scores.sort((a, b) => b - a);
console.log(scores); // [78, 85, 88, 92, 95]

// Basic join with default separator
let colors = ["red", "green", "blue"];
let result = colors.join();
console.log(result); // "red,green,blue"