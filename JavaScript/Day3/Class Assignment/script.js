// Divisibility Check
/*let num = Number(prompt("Enter a number divisible by 10"))
if (num%10 == 0) {
    alert("Good number")
    
} else {
    alert("Bad number")
    
}*/

// User Profile
// let name = prompt("Enter your name: ")
// let age = prompt("Enter your age: ")
// alert(`${name} is ${age} years old `)

// Quarterly months
// let month = prompt("Enter a month: ");
// switch(month){
//     case 'january' : case 'february' : case 'march' : alert("you have chosen Q1 month");
//     break;
//     case 'april': case 'may' : case 'june': alert("you have chosen Q2 month");
//     break;
//     case 'july' : case 'august' : case 'september' : alert("you have chosen Q3 month");
//     break;
//     case 'october' : case 'november' : case 'december' : alert("you have chosen Q4 month");
//     break;
//     default: alert("Wrong month")
// }


// if(month == "january" || month == "february" || month == "march"){
//     alert("you have chosen Q1 month")
// }
// else if(month == "april" || month == "may" || month == "june"){
//     alert("you have chosen Q2 month")
// }
// else if(month == "july" || month == "august" || month == "september"){
//     alert("you have chosen Q3 month")
// }
// else if (month == "October" || month == "february" || month == "march"){
//     alert("you have chosen Q4 month")
// } else{
//     alert("Wrong month")
// }

let str = "Alice"
if ((str[0]== "a" || str[0]=="A") && (str.length > 5)) {
    alert("Golden string!!")
} else {
    alert("Not a golden string")
    
}

let num1 = Number(prompt("Enter 1st number"));
let num2 = Number(prompt("Enter 2nd number"));
let num3 = Number(prompt("Enter 3rd number:"));

if (num1 > num2 && num1 > num3) {
    alert(`The Largest number is ${num1}`)
} else if (num2 > num1 && num2 > num3) {
    alert(`The Largest number is ${num2}`)  
} else if (num3 > num1 && num3 > num2) {
    alert(`The Largest number is ${num3}`)  
}
