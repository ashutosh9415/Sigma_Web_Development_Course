let num = Number(prompt("Enter a number: "));

function factorial(number) {
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,));

    let result = arr.slice(1,).reduce((a, b) => {
        return a * b;
    });

    console.log(result);
}
factorial(num);



function focFor(number) {
    let fac = 1;
    for (let i = 1; i <= number; i++) {
        fac *= i;
    }
    console.log(fac);
}
focFor(num);
