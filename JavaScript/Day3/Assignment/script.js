// Write a program to check if a number is positive, negative, or zero.
let num = -5;
if (num > 0) {
    console.log("Positive number")
} else {
    console.log("Negetive number");
}

/*Assign grades based on marks:
90 and above: A
80-89: B
70-79: C
60-69: D
Below 60: F*/

let marks = 85;
if (marks > 90) {
    console.log("Grade A");
} else if(marks >= 80 && marks<= 89 ) {
    console.log("Grade B");
}  else if(marks >= 70 && marks<= 79 ) {
    console.log("Grade C");
}  else if(marks >= 60 && marks<= 69 ) {
    console.log("Grade D");
} else {
    console.log("F");
}


//Check if username is "admin" AND password is "12345". If both are correct, print "Login successful",
//otherwise "Login failed".

let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345"){
    console.log("Login successful");
}else{
    console.log("login failed");
}

// Check if day is "Saturday" OR "Sunday". If yes, print "Weekend", otherwise "Weekday".
let day = "Monday";
if (day === "Saturday" || day === "Sunday"){
    console.log("Weekend");
}else{
    console.log("Weekday");
}

/* A movie ticket costs:

$5 if age < 12
$8 if age >= 12 AND age < 60
$6 if age >= 60

Write code to determine ticket price.*/
let age = 25;
if (age < 12) {
    console.log("ticket cost: $5");
} else if (age>=12 && age<60) {
    console.log("ticket cost: $8");
}else{
    console.log("$6");
}

// Give free shipping if order total is greater than $50 OR customer is a premium member.
let orderTotal = 40;
let isPremium = true;
if (orderTotal > 50 || isPremium) {
    console.log("Free shipping");
} else {
    console.log("No free shipping");
}

/* Check exam results:
If marks >= 33: Check if marks >= 80, print "Pass with distinction", else print "Pass"
If marks < 33: Print "Fail"*/
let marks2 = 75;
if (marks2 >=33){
    if (marks2>= 80){
        console.log("Pass with distinction");
    }else{
        console.log("Pass");
    }
} else{
    console.log("Fail");
}

/* Check weather conditions:
If temperature > 30: Print "Hot day"
If temperature is 20-30:
If it's raining: Print "Pleasant but rainy"
If not raining: Print "Perfect weather"
If temperature < 20: Print "Cold day"*/

let temperature = 25;
let isRaining = false;
if (temperature > 30){
    console.log("Hot day");
} else if (temperature>=20 && temperature <= 30){
    if (isRaining){
        console.log("Pleasant but rainy");
    } else{
        console.log("Perfect weather");
    }
}else {
    console.log("Cold day");
}

/* Write a switch statement that takes a number (1-7) and prints the corresponding day of the week.
1 = Monday
2 = Tuesday
...
7 = Sunday*/

let number = 3
switch(number){
    case 1: console.log("Monday");
    break;
    case 2: console.log("Tuesday");
    break;
    case 3: console.log("Wednesday");
    break;
    case 4: console.log("Thursday");
    break;
    case 5: console.log("Friday");
    break;
    case 6: console.log("Saturday");
    break;
    case 7: console.log("Sunday");
    break;
}

/* Write a switch statement for traffic signals:
"red" → "Stop"
"yellow" → "Slow down"
"green" → "Go"
default → "Invalid signal"*/

let signal = "yellow";

switch(signal){
    case 'red': console.log("Stop");
    break;

    case 'yellow': console.log("Slow down");
    break;

    case 'green': console.log("Go");
    break;
    default: console.log("Invalid signal");
}

// Check if a username exists (is truthy). If yes, print "Welcome [username]", else print "Please enter a username".
let username2 = "";
if (username2){
    console.log("Welcome" , username2);
}else{
    console.log("Please enter a usename");
}
/* Check if a person can vote:
Age must be >= 18
Must be a citizen
Must not have already voted*/
let age = 20;
let isCitizen = true;
let hasVoted = false;
if (age>=18 && isCitizen && hasVoted){
    console.log("you can vote");
}