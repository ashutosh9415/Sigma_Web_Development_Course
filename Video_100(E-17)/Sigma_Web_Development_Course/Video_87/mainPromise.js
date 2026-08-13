import fs from "fs/promises"

let a = await fs.readFile("harry.txt")

let b = await fs.writeFile("harry2.txt","how are you");

let c = await fs.appendFile("harry2.txt","Hello, i am a boy");

console.log(a.toString(),c)