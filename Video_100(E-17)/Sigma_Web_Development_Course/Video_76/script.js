// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = { name: 'John', age: 30 };
//             resolve(data);
//         }, 2000);
//     });
// }

async function getData() {
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }

    })
    let y = await x.json()
    console.log(y);
}


async function main() {
    console.log('Fetching data...');

    console.log("Data fetched successfully!");

    let data = await getData();
    console.log(data);

    console.log("Processing data...");
    console.log("Data processing complete!");
}
main();


// data.then((a) => {
//     console.log(a);
//     console.log("Data processing complete!");
// })
