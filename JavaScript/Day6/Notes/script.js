// Object literals
// Intro to Object Literals

// let student = {
//     name: "Alice",
//     age:20,
//     grade: "A"
// }

// let product = {
//     title: "Laptop",
//     price: 45000,
//     inStock: true
// }

let Location = {
  latitude: "28.7041. N",
  longitude: "77.1025. E",
  city: "Delhi",
};

let post = {
  username: "coder_dev",
  content: "Learinig javascript",
  likes: 150,
  comments: 23,
};

// Accessing Objects Properties

// using dot
let student = {
  name: "Alex",
  age: 21,
  city: "Seattle",
};
console.log(student.name);
console.log(student.age);

// using brackets

console.log(student["city"]);

let person = {
  "first name": "John",
  "last name": "Doe",
};
console.log(person["first name"]);

// Add , Update , delete

student.age = 32;
student.city = "Boston";
console.log(student);

// Adding
student.grade = "A+";
student.major = "Computer Science";
console.log(student);

// Deleting
delete student.age;
console.log(student);

let product = {
  name: "Phone",
  price: 30000,
};
product.price = 25000;
product.model = "Samsung";
delete product.name;
console.log(product);

// Nested objects

let userDataBase = {
  user1: {
    name: "Alice",
    age: 32,
    city: "America",
  },
  user2: {
    name: "Bob",
    age: 73,
    city: "London",
  },
};

console.log(userDataBase);

// Company Departments

let company = {
  engineering: {
    employees: 50,
    manager: "John",
  },
  sales: {
    employees: 30,
    manager: "Sarah",
  },
  hr: {
    employees: 10,
    manager: "Mike",
  },
};

console.log(company);

// Accessing in nested objects

console.log(userDataBase.user1.name)

console.log(company.sales.manager);

// Modifying

userDataBase.user2.name = "john"
console.log(userDataBase);

company.engineering.employees = 90
console.log(company);

// Array of Objects

let posts = [
    {
        username: "user1",
        content: "Hello world",
        likes: 43
    },
    {
        username: "user2",
        content: "Java script is fun ",
        likes: 84
    },
    {
        username: "user3",
        content: "Coding daily",
        likes: 53
    }
]

console.log(posts[2].likes); // 53

console.log(posts[0].content);// hello world

// Math Objects 

// math constants
console.log(Math.PI);// 3.141592653589793
console.log(Math.E);// 2.718281828459045

// Absolute values
console.log(Math.abs(-56));// 56

// Power exponentiation

console.log(3**5);// 243
console.log(Math.pow(3,5)); //3^5 // output: 243
console.log(Math.pow(10, 5));// 100000

// Using math pi for calculation
// Finding Area of circle
let r = 5;
let area = Math.PI * Math.pow(r,2);
console.log(`The Area of circle with radius ${r} is : ${area}`);

// Math.random

console.log(Math.random()); // Generates random number

// (between 0 and 10)
let num = Math.random()*10
console.log(num);

// scaled to 100
let num2 = Math.random() * 100
console.log(num2);

console.log(Math.random() * 5);// 0 to 5
console.log(Math.random() * 50);// 0 to 50

// 8. Generating Random Integers

let step1 = Math.random()
let step2 = step1 * 10
let step3 = step2 + 1
console.log(Math.floor(step3));

// General Formula: Math.floor(Math.random() * (max - min + 1)) + min

// 5 to 15
console.log(Math.floor(Math.random() * 11) + 5);

// 4 to 23
console.log(Math.floor(Math.random() * 20) + 4);

// 1 to 6
console.log(Math.floor(Math.random() * 6) + 1);

// Randon choice from array

let colors = ["red", "green", "blue", "yellow"];
let indx = Math.floor(Math.random() * colors.length);
console.log(colors[indx]);

// Random ID generator (1000-9999)

let id = Math.floor(Math.random() * 9000) + 1000
console.log(id);