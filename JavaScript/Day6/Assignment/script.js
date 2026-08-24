/*  Section 1: Basic Object Literals
Question 1: Create an object called car with the following properties:
brand: "Tesla"
model: "Model 3"
year: 2024
color: "white"

Then print the brand and year using dot notation.*/

let car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2024,
  color: "white",
};
console.log(car.brand); // Tesla
console.log(car.year); // 2024

/* Question 2: Create an object called movie with properties:
title: "Inception"
director: "Christopher Nolan"
year: 2010
rating: 8.8
Access and print the director using bracket notation and the rating using dot notation. */

let movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  rating: 8.8,
};
console.log(movie["director"]); // Christopher Nolan
console.log(movie.rating); // 8.8

/* Section 2: Modifying Objects
Question 1: Create an object student with:
name: "John"
age: 20
grade: "B"

Then:
Update the grade to "A"
Add a new property city with value "Mumbai"
Delete the age property
Print the final object */

let student = {
  name: "John",
  age: 20,
  grade: "B",
};

student.grade = "A";
student.city = "Mumbai";
delete student.age;
console.log(student); // {name: 'John', grade: 'A', city: 'Mumbai'}

/* Question 2: Create an object product with:

name: "Laptop"
price: 50000

Then:
Change the price to 45000
Add a property brand with value "Dell"
Add a property inStock with value true
Print the updated object */

let product = {
  name: "Laptop",
  price: 50000,
};

product.price = 45000;
product.brand = "Dell";
product.inStock = true;
console.log(product);
/* Section 3: Nested Objects
Question 1: Create a nested object called classroom with the following structure:

let classroom = {
teacher: { name: "Ms. Smith", subject: "Math" },
student1: { name: "Alice", grade: "A" },
student2: { name: "Bob", grade: "B+" }
};

Then:
Print the teacher's name
Print student1's grade
Print student2's name */

let classroom = {
  teacher: { name: "Ms. Smith", subject: "Math" },
  student1: { name: "Alice", grade: "A" },
  student2: { name: "Bob", grade: "B+" },
};

console.log(classroom.teacher.name); // Ms. Smith
console.log(classroom.student1.grade); // A
console.log(classroom.student2.name); // Bob

/* Question 2: Create an object company with nested objects:


javascript
let company = {
engineering: { employees: 40, manager: "John" },
sales: { employees: 25, manager: "Sarah" }
};

Then:
Print the number of employees in engineering
Print the manager of sales department
Update engineering employees to 45 and print the updated value */

let company = {
  engineering: { employees: 40, manager: "John" },
  sales: { employees: 25, manager: "Sarah" },
};
console.log(company.engineering.employees); // 40
console.log(company.sales.manager); // Sarah
company.engineering.employees = 45;
console.log(company.engineering.employees); // 45

/* Section 4: Array of Objects
Question 1: Create an array called students containing three student objects:
Student 1: name: "Emma", age: 20, grade: "A"
Student 2: name: "Liam", age: 21, grade: "B"
Student 3: name: "Olivia", age: 19, grade: "A+"

Then:
Print the name of the first student
Print the grade of the third student
Print the total number of students */

let students = [
  {
    name: "Emma",
    age: 20,
    grade: "A",
  },
  {
    name: "Liam",
    age: 21,
    grade: "B",
  },
  {
    name: "Olivia",
    age: 19,
    grade: "A+",
  },
];

console.log(students[0].name);
console.log(students[2].grade);
console.log(students.length);

/* Question 2: Create an array called products with these objects:
Product 1: id: 101, name: "Phone", price: 30000
Product 2: id: 102, name: "Laptop", price: 55000
Product 3: id: 103, name: "Tablet", price: 20000

Then:
Print the name of the second product
Print the price of the first product
Add a new product: id: 104, name: "Smartwatch", price: 15000
Print the total number of products */

let products = [
  {
    id: 101,
    name: "Phone",
    price: 30000,
  },
  {
    id: 102,
    name: "Laptop",
    price: 55000,
  },
  {
    id: 103,
    name: "Tablet",
    price: 20000,
  },
];

console.log(products[1].name); // Laptop
console.log(products[0].price); // 30000
products.push({ id: 104, name: "Smartwatch", price: 15000 });
// console.log(products);
console.log(products.length); // 4

/* Section 5: Complex Array of Objects
Question 1: Create an array posts with social media post objects:
Post 1: username: "tech_guru", content: "Learning JavaScript!", likes: 150
Post 2: username: "code_ninja", content: "Arrays are awesome", likes: 200

Then:

Print the content of the first post
Print the likes of the second post
Update the likes of the first post to 175
Print the updated likes */

let posts = [
  {
    username: "tech_guru",
    content: "learning JavaScript!",
    likes: 150,
  },
  {
    username: "code_ninja",
    content: "Arrays are awesome !",
    likes: 200,
  },
];

console.log(posts[0].content); // learining JavaScript
console.log(posts[1].likes); // 200
posts[0].likes = 175;
console.log(posts[0].likes); // 175

/* Question 2: Create an array courses containing:
Course 1: name: "JavaScript", duration: 40, instructor: "John"
Course 2: name: "Python", duration: 35, instructor: "Sarah"
Course 3: name: "React", duration: 30, instructor: "Mike"

Then:
Print the instructor of the second course
Print the duration of the first course
Change the duration of "React" to 32 hours
Print all course names (access each index separately) */
let courses = [
  {
    name: "JavaScript",
    duration: 40,
    instructor: "John",
  },
  {
    name: "Python",
    duration: 35,
    instructor: "Sarah",
  },
  {
    name: "React",
    duration: 30,
    instructor: "Mike",
  }
];
console.log(courses[1].instructor); // Sarah
console.log(courses[0].duration); // 40
courses[2].duration = 32
console.log(courses[0].name); // JavaScript
console.log(courses[1].name); // Python
console.log(courses[2].name); // React
