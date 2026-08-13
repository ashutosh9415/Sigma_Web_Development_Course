// Select the database to use.
use('sigma');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
    {
        name: 'python',
        price: 18000,
        Instructor: 'Rahul'
    },
    {
        name: 'javascript',
        price: 15000,
        Instructor: 'Neha'
    },
    {
        name: 'c++',
        price: 12000,
        Instructor: 'Amit'
    },
    {
        name: 'react',
        price: 22000,
        Instructor: 'Priya'
    },
    {
        name: 'nodejs',
        price: 20000,
        Instructor: 'Vikas'
    },
    {
        name: 'mongodb',
        price: 17000,
        Instructor: 'Suresh'
    },
    {
        name: 'angular',
        price: 21000,
        Instructor: 'Kavita'
    },
    {
        name: 'django',
        price: 19000,
        Instructor: 'Ankit'
    },
    {
        name: 'spring boot',
        price: 25000,
        Instructor: 'Rohit'
    },
    {
        name: 'data science',
        price: 30000,
        Instructor: 'Meena'
    }
]);

// print a meassage to the output window.
console.log("Done inserting documents into the courses collection.");