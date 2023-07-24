
const mongoose = require(`mongoose`);
const passportLocalMongoose = require("passport-local-mongoose");

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

// Hashing the password with the passport-local-mongoose
userSchema.plugin(passportLocalMongoose,{iterations:Number(process.env.SALT_ROUNDS), usernameField:"email"});

// Models
const userModel = new mongoose.model("user",userSchema);

module.exports = { userModel };
