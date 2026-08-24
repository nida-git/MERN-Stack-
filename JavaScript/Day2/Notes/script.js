let userName = "Alice"
console.log(userName) // Alice
let isLoggedIn = true
console.log(isLoggedIn) // true
let word = "Template"
console.log(`Understanding ${word} literals`) //Understanding Template literals
let message = 'it\'s is message with backslash' //it's is message with backslash
console.log(message)
let str= "My string"
console.log(str.toUpperCase()) //MY STRING
console.log(str.toLowerCase()) //my string
let message2 = 'it\'s is message w\rith tab \t  backslash \\ quotes doublequotes \"' // it's is message with tab 	  backslash \ quotes doublequotes "
console.log(message2) //
let str2= "My string 2"
str2[0] = "b"
console.log( "strings are immutable:", str2) // strings are immutable: My string 2
console.log(str2.length) // 11
console.log(str2[str2.length - 1]) // 2
let score0;
let team = null;
console.log(typeof score0) // undefined
console.log(typeof team) // object
if (score0 === undefined) {
console.log("score is undefined");
} // score is undefined

if (team === null) {
console.log("team is null");
} // team is null

console.warn("This is a warnign message") // script.js:31 This is a warnign message

console.info("open yours eyes and see carefully , this is an info message") // open yours eyes and see carefully , this is an info message

let playerName = "Alice";
let score1 = 1500;
let level = 5;
let statusMessage = `Player ${playerName} is on level ${level} with ${score1} points!`;
console.log(statusMessage);

let temperature = 20 
let wheather = `it's ${temperature >= 30 ? "hot" : "cold" } today` 
console.log(wheather)

// Comparision operators

console.log(20>10) // true
console.log(20>20) // false
console.log(60<20) // false
console.log(10<20) // true
console.log(20>=20) // true
console.log(20<=20) // true
console.log(20==20) // true
console.log(15!=15) // false


let password = "abcgh123";
let minLength = 8;
if (password.length >= minLength) {
console.log("Password is strong enough");
} else {
console.log("Password is too short");
} // Password is strong enough

let name = "true"
// console.log(name == true )
console.log("" == false) // true
console.log(" " == true) // Predicted: true
// console.log(name != true)
if (" "){
    console.log("true")
}

console.log("String Comparison")
console.log("apple" > "banana") // false
console.log("apple" < "banana") // true
console.log("aaaaa" < "aaaaaa") // true
console.log("aaaaaa" < "aaaa") // false
console.log("app1e" < "apple"); //true
console.log("10" < "2") // true
console.log("0" < "2") // true
console.log("60" < "2000") // false
console.log("20" > "9") // false



