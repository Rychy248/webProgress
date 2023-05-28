

const https = require("https");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { send } = require("process");
const { stringify } = require("querystring");

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
    let name = req.body.name;
    let lastName = req.body['last-name'];
    let email = req.body.email;
    let birthday = req.body.birthday;
    birthday = `${birthday.split("-")[1]}/${birthday.split("-")[2]}`

    const apiKeys = require("./apiKeys");
    const mailchimp = require("@mailchimp/mailchimp_marketing");


    mailchimp.setConfig({
        apiKey: apiKeys.mailChimp.apiKey,
        server: apiKeys.mailChimp.server,
    });

    async function run() {
        console.log("API called....");
    
        const response = await mailchimp.lists.addListMember(`${apiKeys.mailChimp.listId}`,{
            email_address: `${email}`,
            status: `subscribed`,
            merge_fields:{
                FNAME: `${name}`,
                LNAME: `${lastName}`,
                BIRTHDAY: `${birthday}`
            }
        });
        console.log("API response: "+response.status);
        console.log(`Name: ${name} `);
        console.log(`Last Name: ${lastName} `);
        console.log(`email: ${email} `);
        console.log(`birthday: ${birthday} `);

        res.sendFile(__dirname + "/success.html",(err=>{err ? console.log(err) : console.log("success.html served...")}));
    };

    run().catch((err)=>{
        res.sendFile(__dirname + "/failure.html",(err=>{err ? console.log(err) : console.log("Failre.html served...")}));
    });



});

app.get("/getLists",(req,res)=>{

    const apiKeys = require("./apiKeys");
    const mailchimp = require("@mailchimp/mailchimp_marketing");

    mailchimp.setConfig({
        apiKey: apiKeys.mailChimp.apiKey,
        server: apiKeys.mailChimp.server,
    });

    const run = async () => {
        const response = await mailchimp.lists.addListMember(`${apiKeys.mailChimp.listId}`,{
            email_address: "example@gmail.com",
            status: "subscribed",
            FNAME:"",
            LNAME:"",
            PHONE:"",
            BIRTHDAY:""
        });
        console.log(response);
        res.write("api response: "+ JSON.stringify(response));
        res.send();
    };

    run().catch((err)=>{
        console.log("Error getted: "+err);
    });



});



app.listen(port,()=>{
    console.log("App served port: http://127.0.0.1:"+port)
});
