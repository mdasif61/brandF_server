const express=require('express');
const app=express();
const port=process.env.PORT || 1020;
const cors=require('cors');
const chef=require('./chef.json');

app.use(cors())

app.get('/',(req,res)=>{
    res.send("Assignment 10 Server Ok")
})

app.get('/chef',(req,res)=>{
    res.send(chef)
})

app.listen(port,()=>{
    console.log(`Assignment 10 server running port ${port}`)
})