let a = prompt("Enter a number: ");

let b = prompt("Enter another number: ");
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Please enter valid numbers");
}
let sum = parseInt(a) + parseInt(b);

try {
console.log("The sum of : ",sum);
}catch (error) {
    console.log("Error caught:", error.message);
}