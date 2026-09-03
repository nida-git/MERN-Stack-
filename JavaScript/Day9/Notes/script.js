// foreach

let numbers = [10,20,30,40,50]

numbers.forEach((num)=>{
    console.log(num);
})

let price = [49,99, 799]
price.forEach((pr)=>{
    console.log(`$${pr}`);
})

// Print with index
let fruits = ["Mango", "Banana", "Orange", "Grapes"]
fruits.forEach((fruit , index)=>{
    console.log(fruit, index);
})

// capitalizing and storing in new array

let names = ["alice", "bob", "charlie"];
let capitalizedNames = [];
names.forEach((name)=>{
    capitalizedNames.push(name.toUpperCase())
})
console.log(capitalizedNames);

// capitalizing and storing in new array with map

let names2 = ["alice", "bob", "charlie"];
let capitalizedNames2 = names.map((name)=> name.toUpperCase())

console.log(capitalizedNames2);

// Extracting properties from object

let students = [
{ name: "John", age: 20 },
{ name: "Sarah", age: 22 },
{ name: "Mike", age: 21 }
];

let studentNames = students.map((student)=> student.name)

console.log(studentNames);

// Creating HTML Element 

let items = ["Home", "About", "Contact"];
let Elements = items.map((item)=> `<li> ${item} </li>`)
console.log(Elements);
console.log(items);

let numbers2 = [1,2,3,4,5,6,7,8,9]
let evens = numbers2.filter((num)=> num%2 == 0 )

console.log(evens);

// Filter in object

let people = [
{ name: "John", age: 17 },
{ name: "Sarah", age: 22 },
{ name: "Mike", age: 15 },
{ name: "Emma", age: 25 }
];

let adults = people.filter((obj)=> obj.age >= 18)
console.log(adults);

// Some and Every

let ages = [20, 25, 18, 30];

// Check if all are adults
let allAdults = ages.every((age)=> age>=18)
console.log(allAdults);

// Check if all prices are affordable

let prices = [50, 75, 120, 30];
let isAffordable = price.every((price)=> price <=100)

console.log(isAffordable);

// The reduce Method

// Sum of all numbers

let numbers3 = [1,2,4,6,3,7,9]
let sum = numbers3.reduce((total, num)=> total + num)
console.log(sum);

// let numbers4 = [45, 78, 12, 89, 34];
// let max = numbers4.reduce((maximum, num) => {
// return num > maximum ? num : maximum;
// }, numbers4[0]);
let numbers4 = [45, 78, 12, 89, 34];
let max = numbers4.reduce((maximum, num) => {
return num > maximum ? num : maximum;
});
console.log(max); 