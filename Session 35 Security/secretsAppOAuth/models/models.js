
const mongoose = require(`mongoose`);
const passportLocalMongoose = require("passport-local-mongoose");

// defining Schemas 
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        minLength:6,
        maxLength:60,
        required:false
    },
    password:{
        required:false,
        type:String
    },
    googleId:{
        required:false,
        type:String
    }},
    {  
        statics:{
            async findOrCreate(query={}, cb){
                // const googleId = query.googleId;
                try {
                    let user = await this.findOne(query);
                    console.log("USER FINDED: ",user);

                    if(!user){
                        user = await this.create(query);
                        console.log("USER CREATED; ",user);
                    };
    
                    if(cb){
                        return cb(undefined,user);
                    }else{
                        return user
                    };
                } catch (error) {
                    if(cb){
                        return cb(error);
                    }else{
                        return error;
                    };
                };
                
                
            },
        }
    }
);

// Hashing the password with the passport-local-mongoose
userSchema.plugin(passportLocalMongoose,{iterations:Number(process.env.SALT_ROUNDS), usernameField:"email"});

// Models
const userModel = new mongoose.model("user",userSchema);

module.exports = { userModel };

// SCHEMA TYPES
// https://www.geeksforgeeks.org/mongoose-schematype-options/