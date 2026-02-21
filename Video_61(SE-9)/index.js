/*

Create a faulty calculator does using JavaScript
This faulty calculator does following:
1. It takes two number as input from the user
2. It perfoms wrong operations as follows:
+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong Operation 10% of the times 

*/

let random = Math.random()

console.log(random)
let a = Number(prompt("Enter your first number: "))
let operation = prompt("Enter the operation (+, -, *, /, **, %): ")
let b = Number(prompt("Enter your second number: "))

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "*",
    "%": "**",
    "**": "%"
}

if (random > 0.1) {
    // Correct calculation
    console.log(`The result is ${eval(`${a} ${operation} ${b}`)}`)
} else {
    // Incorrect calculation
    operation = obj[operation]
    console.log(`The result is ${eval(`${a} ${operation} ${b}`)}`)
}
