// "use client"
// import {useState, useEffect} from "react"
import fs from "fs/promises"
import Navbar from "@/components/Navbar"

export default function Home() {

  console.log("Hey, i am Ashutosh")
  let a = fs.readFile("AGENTS.md")
  a.then(e => console.log(e.toString()))

  // const [count, setCount] = useState(0)
  return (
    <div>
      <Navbar />
      I am a component
      {/* {count}
    <button onClick={() => setCount(count + 1)}>Click me</button> */}
    </div>
  );
}
