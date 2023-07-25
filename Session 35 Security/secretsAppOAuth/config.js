
// ---const vars
const 
    // general config
    dbSettings = {
        dbName :"secretAouthDB",
        dbPort :"27017"
    },
    appSettings = {
        port:3000
    }
    // Allowed origin for cors util
    // allowedOrigins = ["http://127.0.0.1:5500", "http://localhost:8080/"];
;
// --------------------- IMPORTING  AND SETTING---------------------
// const packages

// Local modules
const path = require('path');
// Third part modules 
const express = require("express");
const ejs = require("ejs");
    // cors = require('cors'),
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlEncoded = bodyParser.urlencoded({extended:true});
    // create app
const app = express();

//SESSION and Passport
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;

// -------- MIDLEWARE
app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public")));

// session config
app.use(session({
    secret:process.env.SECRET_SESSION_ID,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // esto es para enviar solo a HTTPS, sino no se envía
}));

app.use(passport.initialize());
app.use(passport.session());

const { userModel } = require("./models/models");
passport.use(new LocalStrategy(userModel.authenticate()));
passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());
var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets",
}, async function(accessToken, refreshToken, profile, cb) {
    try {
        let user = await userModel.findOrCreate({ googleId: profile.id, email:profile._json.email });
        console.log(profile)
        return cb(undefined, user);
    } catch (err) {
        return cb (err);
    }
}));



// cors midleware
// app.use(cors({origin: allowedOrigins}));
// MODIFY THE JSON PARSER
// app.use(bodyParser.urlencoded({extended:true}));


module.exports = { express, app, dbSettings, appSettings, urlEncoded, jsonParser}

/**
 * 
    
├── app.js
├── config.js
├── controllers
│   ├── homeController.js
│   ├── loginController.js
│   ├── logoutController.js
│   ├── registerController.js
│   └── secretController.js
├── db.js
├── models
│   ├── models.js
│   └── userModel.js
├── package.json
├── package-lock.json
├── public
│   └── css
│       └── styles.css
├── README.md
├── routers
│   ├── authRouter.js
│   ├── homeRouter.js
│   ├── secretRouter.js
│   └── urls.js
├── utils
│   ├── byCript.js
│   ├── customErrors.js
│   ├── practiceObjs.js
│   └── promise.js
└── views
    ├── home.ejs
    ├── login.ejs
    ├── partials
    │   ├── footer.ejs
    │   └── header.ejs
    ├── register.ejs
    ├── secrets.ejs
    └── submit.ejs

    */