// Generate a dummy data in this format in a collection called in a sb called company

// {
//     "name": "Herry",
//     "Salary": 1000,
//     "Language": "Java",
//     "City": "Bangalore",
//     "isManager": false
// }

// Generate 10 such records when a button called generate is clicked!
// create an Express app with Mongoose to achive it
// Every time  the button is clicked, you should clear the collection


import mongoose from "mongoose";
import express from "express";
import { User, generateRandomUser } from "./modules/index.js";

const app = express();
const port = 3000;

// Connect DB
await mongoose.connect("mongodb://127.0.0.1:27017/mydatabase");

// Route
app.get("/", async (req, res) => {

    const user = new User(generateRandomUser()); // ✅ RANDOM DATA

    await user.save();

    res.send("✅ Random User saved");
});

// Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});