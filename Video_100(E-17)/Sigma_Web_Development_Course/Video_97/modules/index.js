import mongoose from "mongoose";

// Array of names
const arr = ["Amit", "Saurabh", "Rohit", "Rahul", "Ankit"];

// Create Schema
const indexSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
});

// Function to generate random data
const generateRandomUser = () => {
    return {
        name: arr[Math.floor(Math.random() * arr.length)],
        salary: Math.floor(Math.random() * 100000),
        language: ["Java", "Python", "JavaScript"][Math.floor(Math.random() * 3)],
        city: ["Bangalore", "Delhi", "Mumbai"][Math.floor(Math.random() * 3)],
        isManager: Math.random() < 0.5
    };
};

// Create Model
const User = mongoose.model("User", indexSchema);

export { User, generateRandomUser };