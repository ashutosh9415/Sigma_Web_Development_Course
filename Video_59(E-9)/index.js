/* Create a faulty calculator does using JavaScript

This faulty calculator does following:
1. It takes two number as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong Operation 10% of the times

*/


let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
let operation = prompt("Your operations (+, -, *, /, **): ");

let random = Math.random();

if (random < 0.1) {
    // Wrong calculation (10%)
    switch (operation) {
        case "+":
            console.log(a - b);
            break;
        case "*":
            console.log(a + b);
            break;
        case "-":
            console.log(a / b);
            break;
        case "/":
            console.log(a ** b);
            break;
        case "**":
            console.log(a % b);
            break;
        default:
            console.log("Invalid operator");
    }
} else {
    // Correct calculation (90%)
    switch (operation) {
        case "+":
            console.log(a + b);
            break;
        case "*":
            console.log(a * b);
            break;
        case "-":
            console.log(a - b);
            break;
        case "/":
            console.log(a / b);
            break;
        case "**":
            console.log(a ** b);
            break;
        default:
            console.log("Invalid operator");
    }
}
