
const mongoose = require(`mongoose`);

const basicItemSchema = new mongoose.Schema({
    item:{
        type:String,
        minLength:3,
        maxLength:60,
        require:[true,"Please give the name"]
    },
});

const dayItem = new mongoose.model("dayItem",basicItemSchema);
const workItem = new mongoose.model("workItem",basicItemSchema);
const customModel = (name) => new mongoose.model(name,basicItemSchema);

module.exports = { 
    dayItem:dayItem,
    workItem:workItem,
    customModel:customModel
};
