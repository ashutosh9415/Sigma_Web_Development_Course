const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  let siteName = "Adidas"
  let searchText = "Search now..."
  res.render("index", { siteName: siteName, searchText: searchText })
})

app.get('/blog/:slug', (req, res) => {
  let blogTitle = "My Blog Post"
  let blogContent = "This is the content of my blog post."
  res.render("blogpost", {blogTitle: blogTitle, blogContent: blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})