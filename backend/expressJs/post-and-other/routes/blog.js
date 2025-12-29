const express=require('express')
const router= express.Router()

router.get('/',(req,res)=>{

    res.send("inside blog")
    })
router.get('/about',(req,res)=>{

    res.send("about blog")
    })

module.exports=router