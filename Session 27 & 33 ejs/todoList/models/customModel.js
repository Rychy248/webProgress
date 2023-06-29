// const mongoose = require(`mongoose`);

const { customModel } = require("./mongoose/itemModel");
const { create, read, del, defaultItems } = require("./mongoose/mongooseController")
/**
 * 
 * @param {String} modelName its a string
 * @returns 
 */
async function insertDefaults(modelName){
    return await defaultItems(customModel(modelName));
};

async function customGetTodoList(modelName){
    return await read(customModel(modelName));
};

async function customPostTodoList(req){
    console.log("Data Catched, FROM CUSTOM:")
    console.log(req.body);

    let [error, statusCode, item] = [0,200,undefined];

    try {
        item = await create(customModel(req.body.modelName),{item:req.body.task});
    } catch (err) {
        statusCode = 400;
        error = err;
    };

    return {
        error:error,
        statusCode:statusCode,
        item:item
    };

};
async function customDeleteTodoList(req){
    console.log("Data Catched DELETE;")
    console.log(req.body);
    return await del(customModel(req.body.modelName),{_id:req.body.id})
};

module.exports = { customGetTodoList, customPostTodoList, customDeleteTodoList, insertDefaults };


