
const mongoose = require(`mongoose`);
// Encryption replaced by hashing
// const encrypt = require('mongoose-encryption');

// importing the secret key into the .env
// Encryption replaced by hashing
// const secret = process.env.SECRET_MONGO_CRYPT_KEY;

// To simplfy the use for passportlocal
const passportLocalMongoose = require("passport-local-mongoose");
const passport = require("passport");

// defining Schemas 
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        minLength:6,
        maxLength:60,
        require:[true,"Please give a valid email"]
    },
    password:{
        type:String
    },
    justToNothing:{
        type:String
    }
});
// PASSPORT MONGOOSE
userSchema.plugin(passportLocalMongoose,{iterations:2, usernameField:"email"});

    // select the encripte with the last field, encryptedFields: , in the options object
    // documentation https://www.npmjs.com/package/mongoose-encryption
    // Encryption replaced by hashing
    // userSchema.plugin(encrypt,{secret:secret, encryptedFields: ["password"]});

// Models
const userModel = new mongoose.model("user",userSchema);

// simplify the use of passport-local, with passport-local-mongoose
passport.use(userModel.createStrategy());
passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());

module.exports = { userModel };
