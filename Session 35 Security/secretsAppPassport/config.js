
// --------------------- IMPORTING  AND SETTING---------------------
// const packages
const 
// Local modules
    path = require('path'),
// Third part modules 
    express = require("express"),
    ejs = require("ejs")
    // cors = require('cors'),
    bodyParser = require('body-parser'),
    jsonParser = bodyParser.json(),
    urlEncoded = bodyParser.urlencoded({extended:true}),
    // create app
    app = express()
    //SESSION and Passport
    session = require("express-session"),
    passport = require("passport")
;
// ---const vars
const 
    // general config
    dbSettings = {
        dbName :"secretDB",
        dbPort :"27017"
    },
    appSettings = {
        port:3000
    }
    // Allowed origin for cors util
    // allowedOrigins = ["http://127.0.0.1:5500", "http://localhost:8080/"];
;
// -------- MIDLEWARE
app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

// session config
app.use(session({
    secret:process.env.SECRET_SESSION_ID,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

app.use(passport.initialize());
app.use(passport.session())

// cors midleware
// app.use(cors({origin: allowedOrigins}));
// MODIFY THE JSON PARSER
// app.use(bodyParser.urlencoded({extended:true}));


module.exports = { express, app, dbSettings, appSettings, urlEncoded, jsonParser}
