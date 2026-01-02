const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'));

app.set('view engine', 'ejs') //using ejs with express

app.get('/', (req, res) => {
    let siteName="mysite"
    let searchText="someText" // to send these varibles in html file we use ejs engine
    //  res.sendFile('templates/index.html',{root:__dirname})
  res.render('index',{siteName:siteName,searchText:searchText}) //render instead of sendFile, to render a view template
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
