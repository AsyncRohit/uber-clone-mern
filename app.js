const dotenv=require('dotenv')
dotenv.config()
const express=require('express');
const cors=require('cors')
const app=express();
const connectToDb=require('./db/db');
connectToDb();

const userRoutes=require('./routes/user_routes')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.send("Hello World tere naa,");
});

module.exports =app;