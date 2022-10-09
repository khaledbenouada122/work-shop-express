const express = require('express')
const router = express.Router ()
const path= require('path')
const authMiddelware = (req,res,next)=>{
    const auth = true
    if (auth ) {
        console.log("user autoriser")
        next() ; 
    }
    else{
        res.send("user not autorser" )
    }
}
router.get('/',authMiddelware,(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','home.html'))
})
router.get('/',authMiddelware,(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','contact.html'))
})

module.exports=router