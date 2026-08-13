/*
Write a program to calculate factorial of a number using reduce and using for loops.
*/




// Using the reduce method with Array

let number = Number(prompt("Enter a number to calculate its factorial: "));
//convert the number to an array of numbers from 1 to the input number
let numArr = []
for (let i = 1; i <= number; i++) {
    numArr.push(i);
}
console.log(numArr);
//calculate the factorial
const fact = numArr.reduce((a, b) =>{
    return a * b;
})
console.log(`The factorial of ${number} is: ${fact}`);







// Using for loop

let num = Number(prompt("Enter a number to calculate its factorial: "));

let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log(`The factorial of ${num} is: ${factorial}`);