
// third modules
// const express = require("express");
const bodyParser = require("body-parser");

//CONTROLLERS MODULE
const { dailyGet, dailyPost } = require("../controller/dailyController")

//MIDLEWARE USED
const jsonParser = bodyParser.json(); // create application/json parser
const urlencodedParser = bodyParser.urlencoded({ extended: false }); // create application/x-www-form-urlencoded parser

// setting route
const dailyRoute = require("express").Router();

dailyRoute.use((req,res,next)=>{
    next();
});

dailyRoute.get("/", urlencodedParser, dailyGet);
dailyRoute.post("/",jsonParser, dailyPost);

module.exports = { dailyRoute };
