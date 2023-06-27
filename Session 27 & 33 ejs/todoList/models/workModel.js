
const { workItem } = require("./mongoose/itemModel");
const { create, read, del, defaultItems} = require("./mongoose/mongooseController")

async function insertDefaults(){
    return await defaultItems(workItem);
};

async function workGetTodoList(){
    return await read(workItem);
};

async function workPostTodoList(req){
    console.log("Data Catched, FROM WORK;")
    console.log(req.body);

    let [error, statusCode, item] = [0,200,undefined];

    try {
        item = await create(workItem,{item:req.body.task});
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

async function workDeleteTodoList(req){
    console.log("Data Catched to DELETE;")
    console.log(req.body.id);
    return await del(workItem,{"_id":req.body.id})
};

module.exports = { workGetTodoList, workPostTodoList, workDeleteTodoList, insertDefaults };


