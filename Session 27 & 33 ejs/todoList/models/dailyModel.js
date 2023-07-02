// const mongoose = require(`mongoose`);

const { dayItem } = require("./mongoose/models");
const { create, read, del, defaultItems } = require("./mongoose/mongooseController")

async function insertDefaults(){
    return await defaultItems(dayItem);
};

async function dailyGetTodoList(req){
    //dayItem is model
    return await read(dayItem);
};

async function dailyPostTodoList(req){
    console.log("Data Catched, FROM WORK;")
    console.log(req.body);

    let [error, statusCode, item] = [0,200,undefined];

    try {
        item = await create(dayItem,{item:req.body.task});
    } catch (err) {
        statusCode = 400;
        error = err;
        // throw error;

    };

    return {
        error:error,
        statusCode:statusCode,
        item:item
    };

};
async function dailyDeleteTodoList(req){
    console.log("Data Catched DELETE;")
    console.log(req.body);
    return await del(dayItem,{_id:req.body.id})
};

module.exports = { dailyGetTodoList, dailyPostTodoList, dailyDeleteTodoList, insertDefaults };


