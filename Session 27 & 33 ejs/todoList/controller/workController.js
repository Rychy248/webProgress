
// MODEL IMPORT
const { workGetTodoList, workPostTodoList } = require("../models/workModel");

function workGet(req, res, next){
    let todoList = workGetTodoList();
    res.render("work",{todoList:todoList});
};

function workPost(req, res, next){
    res.statusCode = 200;
    res.json(workPostTodoList(req));
};

module.exports = { workGet, workPost };
