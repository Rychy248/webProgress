//jshint esversion:6

const mongoose = require(`mongoose`);

const fruitSchema = new mongoose.Schema({
    name:{
        type:String,
        minLength:4,
        maxLength:15,
        require:[true,"Please give the name"]
    },
    rating:{
        type:Number,
        min:[1,"To slow rating"],
        max:[10,"Exced to the limit"]
    },
    review:{
        type:String,
        minLength:10,
        maxLength:100
    }
});

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        minLength:4,
        maxLength:15,
        require:[true,"Please give a person's name"]
    },
    age:{
        type:Number,
        min:[0,"To slow rating"],
        max:[150,"Exced to the limit"]
    },
    favoriteFruit:fruitSchema
});

const fruit = new mongoose.model("fruit",fruitSchema);
const person = new mongoose.model("person",personSchema);

module.exports = { 
    fruitSchema, fruit,
    personSchema, person
};
