
// third modules
// const express = require("express");
const bodyParser = require("body-parser");

//CONTROLLERS MODULE
const { workGet, workPost } = require("../controller/workController")

//MIDLEWARE USED
const jsonParser = bodyParser.json(); // create application/json parser
const urlencodedParser = bodyParser.urlencoded({ extended: false }); // create application/x-www-form-urlencoded parser

// setting route
const workRoute = require("express").Router();

workRoute.use((req,res,next)=>{
    next();
});

workRoute.get("/", urlencodedParser, workGet);
workRoute.post("/", jsonParser, workPost);

module.exports = { workRoute };
