const express = require('express')
const app = express()
const { userlist }=require('./userlist')
app.use(express.static(__dirname+'/public'));
app.use('/views',require('./routes/view'))
app.use(express.json())
app.get('/users',(req,res)=>{
    res.json(userlist)
})
app.post('/users',(req,res)=>{
    const newuser = req.body
    const newuserlist = [...userlist,newuser]
    res.json(newuserlist)

})
app.delete('/users/:id',(req,res)=>{
    const newuserlist=userlist.filter(user=>user.id!=req.params.id)
    res.json(newuserlist)

})
app.put('/users/:id',(req,res)=>{
    const newe= userlist.map(user=>user.id==req.params.id?{...user,...req.body}:user )
        res.json(newe)
        
       
})

app.listen(5500,(err)=>{
    if (err) throw err
    else{
        console.log("server is runinig in port 5500")
    }
})

