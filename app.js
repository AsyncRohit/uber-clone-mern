const dotenv=require('dotenv')
dotenv.config()
const express=require('express');
const cors=require('cors')
const app=express();
const connectToDb=require('./db/db');
connectToDb();
app.use(cors());

app.get("/",function(req,res){
    res.send("Hello World tere naa,");
});

module.exports =app;