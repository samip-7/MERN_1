
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require("express");
const app = express();
const port = 3000;

dotenv.config({path: "./config.env"});

const DB = process.env.DATABASE;

mongoose.connect(DB,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}).then(()=>{
    console.log("It's connected.");
}).catch((err)=>{
    console.log("No connection.");
});

// DLWv0o9P1FraVVkm

// Middleware used to verify user sign in at run time.

const middleware = (req,res,next)=>{
    console.log("It's middleware.");
    next();
}

app.get("/", (req,res)=>{
    res.send("Hello World");
});

app.get("/contact", (req,res)=>{
    res.send("You landed on contact page.")
});

app.get("/about",middleware, (req,res)=>{
    res.send("You landed on about page.")
});

app.get("/signin", (req,res)=>{
    res.send("You landed on Sign in page.")
});

app.get("/signup", (req,res)=>{
    res.send("You landed on Sign up page.")
});

app.get("/secret", (req,res)=>{
    res.send("You landed on secret page.")
});


app.listen(port, ()=>{
    console.log("Listening in port 3000.")
})