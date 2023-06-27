
const mongoose = require(`mongoose`);

const dayItemSchema = new mongoose.Schema({
    item:{
        type:String,
        minLength:4,
        maxLength:20,
        require:[true,"Please give the name"]
    },
});
const workItemSchema = new mongoose.Schema({
    item:{
        type:String,
        minLength:3,
        maxLength:20,
        require:[true,"Please give the name"]
    },
});

const dayItem = new mongoose.model("dayItem",dayItemSchema);
const workItem = new mongoose.model("workItem",workItemSchema);

module.exports = { 
    dayItem:dayItem,
    workItem:workItem
};
