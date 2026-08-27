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
  },
];
console.log(courses[1].instructor); // Sarah
console.log(courses[0].duration); // 40
courses[2].duration = 32;
console.log(courses[0].name); // JavaScript
console.log(courses[1].name); // Python
console.log(courses[2].name); // React

/* Section 6: Math Object Basics
Question 1: Use the Math object to:
Print the value of Math.PI
Calculate 2 to the power of 5 using Math.pow()
Find the absolute value of -25
Print all results with appropriate labels */

let piValue = Math.PI;
console.log(piValue); // 3.141592653589793

console.log(Math.pow(2, 5)); // 32

console.log(Math.abs(-25)); // 25

/* Question 2: Use Math methods to:
Round down 7.8 using Math.floor()
Round up 7.2 using Math.ceil()
Calculate 3 to the power of 4
Find the absolute value of -100
Print all results */

console.log(Math.floor(7.8)); // 7
console.log(Math.ceil(7.2)); // 8
console.log(Math.pow(4, 3)); // 64
console.log(Math.abs(-100)); // 100

/* Section 7: Math.random() Basics
Question 1: Generate and print:
A random decimal number using Math.random()
A random decimal between 0 and 10 (multiply by 10)
A random decimal between 0 and 100 (multiply by 100)
Run your code multiple times to see different values */

let random_num = Math.random();

let num_0to10 = Math.random() * 10;

let num_0to100 = Math.random() * 100;

console.log(random_num);
console.log(num_0to10);
console.log(num_0to100);

/* Question 2: Create variables for:
A random decimal (Math.random())
That decimal multiplied by 5
That decimal multiplied by 20
Print all three values with labels */

let random_num1 = Math.random();
let random_num2 = random_num1 * 5;
let random_num3 = random_num2 * 20;
console.log(`random number is: ${random_num1}`);
console.log(`random number after multipied by 5 is: ${random_num2}`);
console.log(`After multipying by 20 : ${random_num3}`);

/* Section 8: Generating Random Integers (1 to 10)
Question 1: Generate a random integer from 1 to 10 step by step:
Create a variable step1 with Math.random()
Create a variable step2 by multiplying step1 by 10
Create a variable step3 by using Math.floor() on step2
Create a variable step4 by adding 1 to step3
Print each step to understand the process */

let step1 = Math.random();
let step2 = step1 * 10;
let step3 = Math.floor(step2);
let step4 = step3 + 1;
console.log("Step 1: ", step1);
console.log("Step 2: ", step2);
console.log("Step 3: ", step3);
console.log("Step 4: ", step4);

/* Question 2: Generate random integers using the one-line formula:
Generate a random number from 1 to 10
Generate another random number from 1 to 10
Generate a third random number from 1 to 10
Print all three to see they're different each time */
let random_number1 = Math.floor(Math.random() * 10) + 1;
let random_number2 = Math.floor(Math.random() * 10) + 1;
let random_number3 = Math.floor(Math.random() * 10) + 1;

console.log(random_number1);
console.log(random_number2);
console.log(random_number3);

/*Section 9: Random Integers in Different Ranges
Question 1: Generate and print:
A random integer from 1 to 100
A random integer from 1 to 6 (like a dice)
A random integer from 1 to 5 (like a star rating)
Label each output clearly */

let num1 = Math.floor(Math.random() * 100) + 1;
let num2 = Math.floor(Math.random() * 6) + 1;
let num3 = Math.floor(Math.random() * 5) + 1;

console.log(`The random number betwen 1 to 100 ${num1}`);
console.log(`The random number betwen 1 to 6 ${num2}`);
console.log(`The random number betwen 1 to 5 ${num3}`);


/* Question 2: Generate random numbers for:
A dice roll (1 to 6)
A random day of the week (1 to 7)
A random month (1 to 12)
A random age between 18 and 25
Print all values with descriptive labels */
