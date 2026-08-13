async function sleep(params) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000)
    })
}

function sum(a,b,c){
    return a+b+c;
}

(async function main() {
    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b)


    // let [x,y ,...rest] = [5,7,5353,53,53,32,66,21];
    // console.log(x,y,rest)


    let arr = [2,5,7]
    console.log(sum(arr[0],arr[1],arr[2]));
    console.log(sum(...arr)) // ... is used for spliting


})()