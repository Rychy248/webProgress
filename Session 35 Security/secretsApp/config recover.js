
// --------------------- IMPORTING  AND SETTING---------------------
const 
// Local modules
    path = require('path'),
// Third part modules 
    express = require("express"),
    ejs = require("ejs")
    bodyParser = require('body-parser'),
    jsonParser = bodyParser.json(),
    urlEncoded = bodyParser.urlencoded({extended:true}),
// general config
    dbSettings = {
        dbName :"secretDB",
        dbPort :"27017"
    },
    appSettings = {
        port:3000
    },
// create app
    app = express()
;
// -------- MIDLEWARE
app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

module.exports = { express, app, dbSettings, appSettings, urlEncoded, jsonParser}
