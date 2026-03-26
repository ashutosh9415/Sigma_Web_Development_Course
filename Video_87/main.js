const { error } = require("console")
const fs = require("fs")

console.log("starting")

// fs.writeFileSync("harry.txt","Harry is a good boy")

fs.writeFile("harry2.txt","Harry is good boy", ()=>{
    console.log("done")
    fs.readFile("harry2.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})

fs.appendFile("harry.txt","harryrobo" , (e ,d) =>{
    console.log(d)
})
console.log("ending")