//  https://www.npmjs.com/package/mongoose

import mongoose from "mongoose";
import express from "express";
import { Todo } from "./modules/ToDo.js";


let conn = await mongoose.connect("mongodb://localhost:27017/");
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({
        title: "Learn Mongoose",
        desc: "Learn Mongoose with Ashutosh",
        isDone: false
    });
    todo.save();
    res.send('Hello Ashutosh, Welcome to Mongoose!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})