// Intro to loops

for (let i = 0; i < 100; i++) {
  console.log("Hello");
} // 100 Hello

// Printing numbers from 1 to 5
for (let i = 0; i <= 5; i++) {
  console.log(i);
}
0;
// 1
// 2
// 3
// 4
// 5

// Print Odd Numbers from 1 to 15
for (let i = 1; i <= 15; i += 2) {
  console.log(i);
}

1;
// 3
// 5
// 7
// 9
// 11
// 13
// 15

// Print Even Numbers from 2 to 10
console.log("Print Even Numbers from 2 to 10");
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// Print Even Numbers from 2 to 10
// 2
// 4
// 6
// 8
// 10

console.log("Multiplication Table of 5");

for (let i = 0; i <= 10; i++) {
  console.log(`5 x ${i} = ${i * 5}`);
}
// Multiplication Table of 5
// 5 x 0 = 0
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50

console.log("Countdown from 10 to 1");

for (let i = 10; i > 0; i--) {
  console.log(i);
}
// Countdown from 10 to 1
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

// Nested for loops

for (let i = 1; i <= 3; i++) {
  console.log(`Outer loop ${i}`);
  for (let j = 1; j <= 4; j++) {
    console.log(`Inner loop ${j}`);
  }
}
// Outer loop 1
// Inner loop 1
// Inner loop 2
// Inner loop 3
// Inner loop 4
// Outer loop 2
// Inner loop 1
// Inner loop 2
// Inner loop 3
// Inner loop 4
// Outer loop 3
// Inner loop 1
// Inner loop 2
// Inner loop 3
// Inner loop 4

// Multiplication Table (1 to 5)

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${j * i} `);
  }
}
// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// 1 x 4 = 4
// 1 x 5 = 5
// 1 x 6 = 6
// 1 x 7 = 7
// 1 x 8 = 8
// 1 x 9 = 9
// 1 x 10 = 10
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10
// 2 x 6 = 12
// 2 x 7 = 14
// 2 x 8 = 16
// 2 x 9 = 18
// 2 x 10 = 20
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// 3 x 4 = 12
// 3 x 5 = 15
// 3 x 6 = 18
// 3 x 7 = 21
// 3 x 8 = 24
// 3 x 9 = 27
// 3 x 10 = 30
// 4 x 1 = 4
// 4 x 2 = 8
// 4 x 3 = 12
// 4 x 4 = 16
// 4 x 5 = 20
// 4 x 6 = 24
// 4 x 7 = 28
// 4 x 8 = 32
// 4 x 9 = 36
// 4 x 10 = 40
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50

// Pattern Printing - Right Triangle

let pattern = "";
for (let i = 0; i < 5; i++) {
  pattern += "*";
  console.log(pattern);
}

// 4: Number Grid
for (let i = 1; i <= 4; i++) {
  row = "";
  for (let j = 1; j <= 4; j++) {
    row += `(${i},${j})`;
  }
  console.log(row);
}

// Inverted Triangle Pattern

// for(let i=5 ; )
