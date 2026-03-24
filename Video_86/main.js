// // (if package type is commonJs)

// // const http = require('node:http') 

// import http from "http"  //(if package type is module)

// const hostname = '127.0.0.1';

// const port = 3000;

// const server = http.createServer((req, res) =>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type','text/html');
//     res.end('<h1>Hello World<h1>');
// });
// server.listen(port, hostname, () =>{
//     console.log(`Server running at http://${hostname}:${port}/`);
// });



// import {a,b,d,c} from "./myMain.js"
// console.log(a,b,c,d)

import ash from "./myMain.js"
console.log(ash)


// const a = require("./myMain2.js")

// console.log(a)