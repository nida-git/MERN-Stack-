//  Question #1 

let userInput = "   HeLLo JaVaScRiPt  "
let cleanInput = userInput.trim().toLowerCase()

console.log(userInput);//   HeLLo JaVaScRiPt  
console.log(cleanInput);//hello javascript

// Question #2

let email = "   USER@EXAMPLE.COM  "
let formattedEmail = email.trim().toLowerCase()

console.log(formattedEmail);//user@example.com

// Section 2 : indexOf() Method
// Question #1

let sentence = "JavaScript is awesome and JavaScript is fun"
let searchAwesome = sentence.indexOf("awesome")
let searchFirstOccurance = sentence.indexOf("JavaScript")
let searchWord = sentence.indexOf("Python")

console.log(searchAwesome); // 14
console.log(searchFirstOccurance); // 0
console.log(searchWord); // -1

// Question #2

let message = "Welcome to coding class"
let checkword = message.indexOf("coding")
if (checkword === -1){
    console.log("Coding not found");
}else{
    console.log("found Coding!");
}
// found Coding

// Section 3 : Method Chaining 
// Question #1

let rawData = "  MESSY iNpuT"
let processedData = rawData.trim().toLowerCase()

console.log(rawData); //   MESSY iNpuT
console.log(processedData);// messy input

// Question #2 
let password = "   MyP@ssw0rd123"
let securePassword = password.trim().toUpperCase().slice(0,9)
console.log(securePassword);// MYP@SSW0R

// Section4 : String Slicing
// Question #1

let fullName = "Alexander Hamilton"
let firstName = fullName.slice(0,9)
let lastName = fullName.slice(9)
console.log(`first name is ${firstName}`);
console.log(`Last Name is ${lastName}`);


// let fullName = prompt("Enter your FullName")
// let trimmedName = fullName.trim()
// let middleIndex = trimmedName.indexOf(" ")
// let firstName = trimmedName.slice(0,middleIndex)
// let lastName = trimmedName.slice(middleIndex)
// console.log(`first name is ${firstName}`);
// console.log(`Last Name is ${lastName}`);


// Question #2

 let phone = "9876543210"
 let areaCode = phone.slice(0,3)
 let lastFour = phone.slice(-4)
 
 console.log(`Area code: ${areaCode} , Last four: ${lastFour}`);


 // Section 5 : Replace Method
 // Question #1 
  let announcement = "The event will happen on Monday and Monday only"
  let updatedAnnouncement = announcement.replace("Monday", "Friday")

  console.log(announcement); // The event will happen on Monday and Monday only
  console.log(updatedAnnouncement);// The event will happen on Friday and Monday only

  // Question #2

  let template = "Hello NAME, welcome to our website"
  let personalizedMessage = template.replace("NAME", "Alice")

  console.log(personalizedMessage);// Hello Alice, welcome to our website


  // Section 6: Basic Arrays
  // Question #1

  let colors = ["red", "green", "blue", "yellow"]
  