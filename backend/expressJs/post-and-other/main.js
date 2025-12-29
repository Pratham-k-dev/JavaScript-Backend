//post request required for sensitive data, large data as get is limited

const express = require('express')
const app = express()
const port = 3000
const blog=require('./routes/blog')
app.use(express.static('public'))
app.use('/blog',blog) // any  endpoint with /blog will be handled by blog file

app.get('/', (req, res) => {
  res.send('this is a get request')

})
app.get('/index', (req, res) => {
//   res.send('this is a get request')

  res.sendFile('templates/index2.html',{root:__dirname}) //serve html file
})
app.post('/', (req, res) => {
console.log("post request")
  res.send('this is a post request')
})
app.put('/', (req, res) => {
  res.send('this is a put request')
}).delete('/', (req, res) => {//chaining here
  res.send('this is a delete request')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
