

const https = require("https");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { send } = require("process");

const port = 3000;
let app = express();

//M I D D L E W A R E statics
//SERVER STATIC FILES  --> https://expressjs.com/en/starter/static-files.html
//app.use("/static",express.static(path.join(__dirname,"public")));, adding stati represent a more especfic, but you have to add it to your relative paths into html too
app.use(express.static(path.join(__dirname,"public")));
//USING BODYPARSER for read the body from request
app.use(bodyParser.urlencoded({extended:true}));



app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/signup.html")
});

app.post("/",(req,res)=>{
    console.log(req.body)
    let name = req.body.name;
    let lastName = req.body['last-name'];
    let email = req.body.email;

    res.write(`Name: ${name} `);
    res.write(`Last Name: ${lastName} `);
    res.write(`email: ${email} `);
    res.send();
});

app.get("/test",(req,res)=>{


    const mailchimp = require("@mailchimp/mailchimp_marketing");
    const mailApiKeys = require("./apiKeys");

    let response;

    mailchimp.setConfig({
        apiKey: mailApiKeys.apiKey,
        server: mailApiKeys.server,
    });
    
    async function run() {
        response = await mailchimp.ping.get();
        console.log(response);
    }
    
    run();
    send(response);

});

app.listen(port,()=>{
    console.log("App served port: http://127.0.0.1:"+port)
});

