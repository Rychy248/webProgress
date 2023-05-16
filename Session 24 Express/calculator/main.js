
const express = require("express");
const path = require("path");
const myApp = express();
const port = 8080;


myApp.get("/",(req,res)=>{
    let options = {
        // root: path.join(__dirname, 'public'), method join, unify the root from __dirname with the suposed public
        root: __dirname,
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    res.sendFile("index.html", options, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Sent:', "index.html");
        };
    });

});

myApp.get("/calculate",(req,res)=>{
    console.log(req);

    let a = Number(req.query.a);
    let b = Number(req.query.b);
    let operation = req.query.operation;
    let result;

    switch (operation) {
        case "multiply":
            result = a * b;
            break;
        case "sum":
            result = a + b;
            break;
        case "divition":
            result = a / b;
            break;
        case "rest":
            result = a - b;
            break;
    
        default:
            result = a + b;
            break;
    };

    res.send(
        `
        <h1>Result</h1>
        <br>
        <p>The ${(operation !== undefined)? operation : "sum"} result is: ${result}</p>
        <button><a href="/">Return</a></button>
        `
    );
});

myApp.listen(port,()=>{
    console.log(`Server listening at port ${port}`);
});