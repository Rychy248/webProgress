
const mongoose = require(`mongoose`);
const encrypt = require('mongoose-encryption');

// importing the secret key into the .env
const secret = process.env.SECRETMongoCryptKey;

// defining Schemas 
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        minLength:6,
        maxLength:60,
        require:[true,"Please give a valid email"]
    },
    password:{
        type:String,
        minLength:6,
        maxLength:260,
        require:[true,"Please give a secure password"]
    }
});
// select the encripte with the last field, encryptedFields: , in the options object
// documentation https://www.npmjs.com/package/mongoose-encryption
userSchema.plugin(encrypt,{secret:secret, encryptedFields: ["password"]});
// Models
const userModel = new mongoose.model("user",userSchema);

module.exports = { userModel };
