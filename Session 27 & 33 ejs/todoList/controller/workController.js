
// MODEL IMPORT
const { workGetTodoList, workPostTodoList, workDeleteTodoList, insertDefaults } = require("../models/workModel");

async function workGet(req, res, next){
    let todoList = await workGetTodoList();
    if (todoList.length == 0){
        await insertDefaults();
        res.redirect("/work");
        
    }else{
        res.render("work",{todoList:todoList});
    };
};

async function workPost(req, res, next){
    let result = await workPostTodoList(req);
    res.json(result);
};

async function workDelete(req,res,next){
    workDeleteTodoList(req)
    .then((data)=>{
        console.log("CONTROLLER");
        console.log(data);
        res.json(data);
    });
}

module.exports = { workGet, workPost, workDelete };
