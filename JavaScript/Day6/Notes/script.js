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
