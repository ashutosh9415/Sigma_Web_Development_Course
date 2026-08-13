import fs from "fs/promises"

export const submitAction = async (e)=>{
    "use server"
    console.log(e.get("name"),e.get("add"))
    let a = await fs.writeFile("ashu.text",'Hey I am good')
}