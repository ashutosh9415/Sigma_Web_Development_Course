const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

const blogs = require('./routes/blogs')
app.use('/blogs', blogs)


// app.use(express.static("public"))

// middleware 1
app.use((req, res, next) => {
  console.log(req.headers)
  req.harry = "I am harry bhai"
  fs.appendFileSync('log.txt', `${Date.now()} - ${req.method} - ${req.url}\n`)
  console.log(`${Date.now()} - ${req.method} - ${req.url}`)
  next()
})

// middleware 2
app.use((req, res, next) => {
  console.log('M2')
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send(`Hello about ${req.harry}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
