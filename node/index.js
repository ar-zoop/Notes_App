const express= require('express');
const app=express();
const config=require('./config.json');
const mongoose= require('mongoose');
const fs=require('fs');


const file= fs.readFileSync("testfs/test1.txt");
console.log(file.toString());
app.use(express.json());

app.post('/', (req, res) => {
    if (req.body.name != "") {
        res.send({ statusCode: 200, message: "Name is good to go", error: false })
    }
    else {
        res.send({
            statusCode: 404, message: "Name not found", error: true
        })
    }
});


app.get("/", (req,res)=>{
    res.send("hello");
});

app.listen(config.server.port);