const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    // console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    // console.log(req.body);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The result of the calculation is " + result);
    res.send("Thnaku for Posting");
});

app.get("/bmi", function(req, res){
    res.sendFile(__dirname + "/bmi.html");
});

app.post("/bmi", function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight + (height ** 2);
    res.send("The result of the calculation is " + bmi);
    res.send("Thnaku for Posting");
});

app.listen(3000, function(){
    console.log("server started at port 3000");
});