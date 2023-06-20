//jshint esversion:6

// native modules
var path = require('path');

// dependeci modules
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// setting the express ap
const app = express();
const port = 3000;

// setting Middle ware
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());
// const jsonParser = bodyParser.json(); // create application/json parser
// const urlencodedParser = bodyParser.urlencoded({ extended: false }); // create application/x-www-form-urlencoded parser

app.use(express.static(path.join(__dirname,"public")));

// PREPARING THE VIEWS
app.set("views",path.join(__dirname,"views"));
app.set('view engine', 'ejs');

// IMPORT ROUNTING
const { dailyRoute } = require('./routers/daily');
const { workRoute } = require('./routers/work');

// USING ROUTES
app.use("/", dailyRoute);
app.use("/work", workRoute);


app.listen(port,(()=>{
    console.log(`App serverd at port ${port}`);
}));
