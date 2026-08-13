const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Employee = require('./models/Employee')

mongoose.connect('mongodb://localhost:27017/company');
const port = 3000

app.set('view engine', 'ejs');

const getRandom = (arr) => {
  let rno = Math.floor(Math.random() * arr.length - 1)
  return arr[rno]
}

app.get('/', (req, res) => {
  res.render('index', { name: 'John' });
})

app.get('/generate', async (req, res) => {
  // Clear the collection before generating new data
  await Employee.deleteMany({});
  //Generate a random data.
  let randomName = ["John", "Jane", "Alice", "Bob", "Charlie", "Dave", "Eve", "Frank", "Grace", "Heidi"]
  let randomLong = ["python", "javascript", "java", "c++", "ruby", "go", "rust", "php", "swift", "kotlin"]
  let randomCity = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"]
  let employees = [];
  function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  for (let i = 0; i < 10; i++) {
    let e = await Employee.create({
      name: getRandom(randomName),
      salary: Math.floor(Math.random() * 220000),
      language: getRandom(randomLong),
      city: getRandom(randomCity),
      isManager: Math.random() > 0.5 ? true : false
    })
    employees.push(e);
    console.log(e)
  }
  res.json({ message: '10 employees generated', employees });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
