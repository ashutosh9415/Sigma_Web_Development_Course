//function in javaScript

function nice(name) {
    console.log("Hey " + name +"you are nice.");
    console.log("Hey "  + name +"your T-shirt is nice.");
    console.log("Hey " + name +"you are good.");
    console.log("Hey " + name +"your course is batter.");
}

// nice("Ashu ")
// nice("Ankit ")


// function sum(a ,b) {
//     console.log(a + b)
// }
// sum(3, 4)


function sum(a ,b) {
    return(a + b)
}
result1 = sum(3, 4)
result2 = sum(5, 4)
result3 = sum(3, 9)
console.log("Sum of this function is: "+ result1)
console.log("Sum of this function is: "+ result2)
console.log("Sum of this function is: "+ result3)




function sum0(a ,b ,c = 5) {
    return(a + b + c)
}
result1 = sum0(3, 4)
result2 = sum0(5, 4)
result3 = sum0(3, 9)
console.log("Sum of this function is: "+ result1)
console.log("Sum of this function is: "+ result2)
console.log("Sum of this function is: "+ result3)



const funct1 = (x) =>{
    console.log("I am a arrow function",x)
}

funct1(44)
funct1(23)
funct1(74)
