
//jshint esversion:6

// native modules
var path = require('path');

// dependeci modules
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// thirdy modules 
const mongoose = require(`mongoose`);

// setting the express ap
const app = express();
const port = 3000;

// setting Middle ware
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());
const jsonParser = bodyParser.json(); // create application/json parser
const urlencodedParser = bodyParser.urlencoded({ extended: false }); // create application/x-www-form-urlencoded parser

app.use(express.static(path.join(__dirname,"public")));

// PREPARING THE VIEWS
app.set("views",path.join(__dirname,"views"));
app.set('view engine', 'ejs');

// IMPORT ROUNTING, jumping to a direct way to use it
// const { dailyRoute } = require('./routers/daily');
// const { workRoute } = require('./routers/work')(express, jsonParser, urlencodedParser);

// USING ROUTES
app.use("/", require('./routers/daily')(express, jsonParser, urlencodedParser));
app.use("/work", require('./routers/work')(express, jsonParser, urlencodedParser));

// Conecting to DB
mongoose.connect(`mongodb://127.0.0.1:27017/todoApp`)
.then((msg)=>{
    console.log("MongoDB connected with MOngoose at port 27027 to the todoApp");

    app.listen(port,(()=>{
        console.log(`App serverd at port ${port}`);
    }));
})
.catch((err)=>{
    console.log(err);
});
