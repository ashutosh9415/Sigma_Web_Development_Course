const express = require('express');
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb');
const bodyparser = require('body-parser')
const cors = require('cors')

dotenv.config()

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'passop';
const app = express()
const port = 3000;
app.use(bodyparser.json())
app.use(cors())

async function startServer() {
    try {
        await client.connect();
        console.log('MongoDB connected successfully');
        app.listen(port, () => {
            console.log(`Example app listening on port http://localhost:${port}`);
        });
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}

startServer();

// Get all passwords
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');

    const findResult = await collection.find({}).toArray();

    console.log(findResult);

    res.json(findResult);
});

// Save a password
app.post('/', async (req, res) => {
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const result = await collection.insertOne(password)
    res.send({ success: true, result });
});

// Update a password by id
app.put('/', async (req, res) => {
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const result = await collection.updateOne(
        { id: password.id },
        { $set: password }
    );
    res.send({ success: true, result });
});

// Delete a password by id
app.delete('/', async (req, res) => {
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const result = await collection.deleteOne(password)
    res.send({ success: true, result });
});

