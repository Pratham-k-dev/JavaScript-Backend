const express = require('express')
const app = express()
const port = 3000
app.use((req,res,next)=>{
    console.log("m1")
     // res.send("terminate") //if respond here it stops here and no next
     console.log(req.headers);
     req.pratham="yo"
    next() //move to next midlleware when done
})
app.use((req,res,next)=>{//middleware2
    console.log("m2")
    next()  
})
app.get('/', (req, res) => {
  res.send('Hello World!!!'+req.pratham)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
