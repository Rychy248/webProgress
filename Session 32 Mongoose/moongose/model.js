//jshint esversion:6

const mongoose = require(`mongoose`);

const fruitSchema = new mongoose.Schema({
    name:String,
    rating:Number,
    review:String
});

const fruit = new mongoose.model("fruit",fruitSchema);

module.exports = { fruitSchema, fruit }

