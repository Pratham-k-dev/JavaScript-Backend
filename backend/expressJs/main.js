//http is limited so we need express

const express = require('express')
const app = express()
const port = 3000
const path=require('path')
app.use(express.static(path.join(__dirname,'\public'))) //for displaying public files
//express.static is builtin middleware function



app.get('/', (req, res) => { // path,handler(request,response)
  res.send('Hello World!!!!!')
})
app.get('/about', (req, res) => {
  res.send('about')
})
app.get('/about/:slug', (req, res) => { // :slup is a parameter
    console.log(req.params)// parameter: {slug:me} //if /about/me
    console.log(req.query) // {mode:dark } //incase of ?mode=dark
    res.send(`hello ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// refer: https://expressjs.com/en/starter/hello-world.html