const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to mongodb database!");
}).catch((err)=>{
    console.log("error connecting to mongodb database");
});
const app = express();

app.listen(3000, ()=>{
    console.log('listening on port 3000');
})