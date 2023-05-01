const express=require('express');
const app=express();
const port=process.env.PORT || 1020;
const cors=require('cors');

app.use(cors())

app.get('/',(req,res)=>{
    res.send("Assignment 10 Server Ok")
})

app.listen(port,()=>{
    console.log(`Assignment 10 server running port ${port}`)
})