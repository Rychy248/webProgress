
const mongoose = require(`mongoose`);

// defining Schemas 

const userSchema = new mongoose.Schema({
    mail:{
        type:String,
        minLength:8,
        maxLength:60,
        require:[true,"Please give a valid email"]
    },
    password:{
        type:String,
        minLength:6,
        maxLength:80,
        require:[true,"Please give a secure password"]
    }
});

// MOdels
const userModel = new mongoose.model("user",userSchema);

module.exports = { userModel };
