const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.render("home");
});
app.post("/api/files",(req,res)=>{
    console.log(req);
    res.send("ok");
})
app.listen(8000,function(){
    console.log("Server started on port 8000");
})