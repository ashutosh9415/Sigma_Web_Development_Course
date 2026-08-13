// Loops in javaScript

let a  = 1;
for(let i = 0;i < 100;i++){  //Simple for loop
    console.log(a + i);
}



let obj = {
    name: "Ashutosh",
    role: "A student",
    Collage: "RKGIT Ghaziabad"
}
for (const key in obj) {    //for in loop used for key value pairs
    const element = obj[key];
    console.log(key, element);  
}



for (const A of "Ashutosh") {  //for of loop used for arrays
    console.log(A);
}



let i = 0;
while (i<10){
    console.log(i);  //while loop
    i++;
}



console.log("hii")
let j = 0;
do {
    console.log(j);  //Do-while loop
    j++;
} while (j<6);