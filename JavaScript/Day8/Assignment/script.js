/* Question 1: Create a Car Object
Create an object called car with the following properties and methods:
Properties: brand , model , price
Method displayInfo() : Uses this to display a message like "Brand: Toyota, Model: Camry, Price:
$25000"
Method applyDiscount(percentage) : Uses this to reduce the price by the given percentage and display the
new price
Test your object by calling both methods.

*/

let car = {
  brand: "Toyoto",
  model: "camry",
  price: 25000,
  displayInfo: function () {
    console.log(`Brand: ${this.brand}`);
    console.log(`Model: ${this.model}`);
    console.log(`Price: ${this.price}`);
  },
  applyDiscount: function (percentage) {
    let discount = (this.price * percentage) / 100;
    let finalAmount = this.price - discount;
    console.log(finalAmount);
  },
};
car.displayInfo();
car.applyDiscount(20);

/* Question 2: Student Grade Calculator
Create an object called student with:
Properties: name , subjects (array of subject objects with name and marks )
Method calculateAverage() : Uses this to calculate and return the average marks across all subjects
Method displayReport() : Uses this to display the student's name and average marks
Example structure:
const student = {
name: "John",
subjects: [
{ name: "Math", marks: 85 },
{ name: "Science", marks: 90 },
{ name: "English", marks: 88 }
],
// Add your methods here
}; 
*/

const student = {
  name: "John",
  subjects: [
    { name: "Math", marks: 85 },
    { name: "Science", marks: 90 },
    { name: "English", marks: 88 },
  ],
  
};
