use("CrudDB");

db.createCollection("Courses");


    // Insert a single document

db.Courses.insertOne({
    name: "Introduction to MongoDB",
    price: 49.99,
    instructor: "John Doe",
    duration: "4 weeks",
    level: "Beginner"
});

db.Courses.insertMany([
    {
        name: "Introduction to MongoDB",
        price: 49.99,
        instructor: "John Doe",
        duration: "4 weeks",
        level: "Beginner"
    },
    {
        name: "Advanced MongoDB",
        price: 79.99,
        instructor: "Jane Smith",
        duration: "6 weeks",
        level: "Advanced"
    },
    {
        name: "MongoDB for Developers",
        price: 59.99,
        instructor: "Michael Lee",
        duration: "5 weeks",
        level: "Intermediate"
    },
    {
        name: "Full Stack with MongoDB",
        price: 99.99,
        instructor: "Chris Brown",
        duration: "8 weeks",
        level: "Advanced"
    },
    {
        name: "MongoDB Basics",
        price: 39.99,
        instructor: "Emily Davis",
        duration: "3 weeks",
        level: "Beginner"
    },
    {
        name: "Mastering NoSQL",
        price: 89.99,
        instructor: "David Wilson",
        duration: "7 weeks",
        level: "Advanced"
    },
    {
        name: "MongoDB Aggregation",
        price: 69.99,
        instructor: "Sophia Taylor",
        duration: "5 weeks",
        level: "Intermediate"
    },
    {
        name: "Database Design with MongoDB",
        price: 74.99,
        instructor: "Daniel Anderson",
        duration: "6 weeks",
        level: "Intermediate"
    }

]);

//  read a document
let a = db.Courses.find({ price: { $lt: 50 } });

console.log(a.count());
console.log(a.toArray());

let b = db.Courses.findOne({ price: 49.99 });

console.log(b);

// update a document
db.Courses.updateOne(
    { name: "Introduction to MongoDB" },
    { $set: { price: 44.99 } }
);

// delete a document    
db.Courses.deleteOne({ name: "MongoDB Basics" });

db.Courses.deleteMany({ price: { $gt: 49.99 } });

