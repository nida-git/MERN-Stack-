// 1. FizzBuzz: Print numbers 1-100, but for multiples of 3 print "Fizz", for multiples of 5 print "Buzz", and for multiples of both print "FizzBuzz"

for(let i = 1; i<=100 ; i++){
    if (i%3 === 0 && i%5 === 0){
        console.log(i, "FizzBuzz");
    }else if(i%3 === 0){
        console.log(i,"Fizz");
    }else if(i%5 === 0){
        console.log(i,"Buzz");
    }else{
        console.log(i);
    }
}

// 2. Factorial Calculator: Calculate factorial of a number using a loop (5! = 5×4×3×2×1 = 120)

let num = 5;
let factorial=1;
for(let i=num; i>0; i--){
    factorial = factorial * i;
}
console.log(factorial);

// 3. Palindrome Checker: Check if a string reads the same forwards and backwards

let str = "abcba"
let isPalindrome = false
for(let i=0; i<str.length; i++){
    let j= str.length-1- i
    if(str[i] === str[j]){
        isPalindrome = true
    }else{
        isPalindrome = false
    }
}
if(isPalindrome === true){
    console.log("Palindrome");
}else{
    console.log("Not a Palindrome");
}

// 4. Prime Number Finder: Find all prime numbers up to 100

console.log(2);
console.log(3);
console.log(5);
console.log(7);
for(let i=1; i<=100; i++){
    if(i % 2 === 0 || i%3 === 0 || i%5 === 0 || i % 7 === 0 ){
        continue
    }else{
        console.log(i);
    }

}

