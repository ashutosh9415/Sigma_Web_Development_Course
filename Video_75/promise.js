console.log('This is Promise');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you")
    } else {
        setTimeout(() => {
            console.log("Yes I am done")
            resolve("Herry")
        }, 2000);
    }
})


let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    } else {
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Herry 2")
        }, 1000);
    }
})

let p3 = Promise.all([prom1, prom2])
p3.then((value) => {
    console.log(value)
}).catch((err) => {
    console.log(err)
})