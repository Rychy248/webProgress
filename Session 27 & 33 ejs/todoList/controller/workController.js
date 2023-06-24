
// MODEL IMPORT
const { workGetTodoList, workPostTodoList } = require("../models/workModel");

async function workGet(req, res, next){
    let todoList = await workGetTodoList();
    res.render("work",{todoList:todoList});
};

async function workPost(req, res, next){
    res.statusCode = 200;
    res.json(workPostTodoList(req));
};

module.exports = { workGet, workPost };
