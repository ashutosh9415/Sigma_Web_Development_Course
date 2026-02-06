// let arr = [23, 34, 11, 132, 441, 42, 1];

// // for (let i = 0; i < arr.length; i++) {  // normal for loop
// //     const element = arr[i];
    
// //     console.log(element);

// // }


// arr.forEach((value, index, array) =>{   //for each loop
//     console.log(value,index,array)
// })



// let obj = {
//     a:1,     //for in loop
//     b:2,
//     c:3
// }
// for (const key in obj) {
//     if (!Object.hasOwn(obj, key)) continue;
    
//     const element = obj[key];
//     console.log(key,element)
    
// }


// let a = [3,4,1,6,8,9]    //for of loop

// for (const key of a) {
//     console.log(key)
// }



let arr = [2,6,9,4,7]
// let newArr=[]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }

let newArr = arr.map((e)=>{
    return e**2
})
// console.log(arr)
console.log(newArr)


const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))


let arr2 = [1,2,3,4,5,6]
const red = (a ,b) => {
    return (a*b)
}
console.log(arr2.reduce(red))