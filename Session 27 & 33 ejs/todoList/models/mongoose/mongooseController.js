
async function defaultItems(model){
    return await model.insertMany([
        {item:"Welcome to your TodoAPP"},
        {item:"Hit the + to add an item"},
        {item:"<-- check to delete an item"}
    ]);
};

/**
 * A funcionaliti for create mongose model interaction with nodejs
 * @param { mongoose.model } model a model create with mongoose, new mongoose.model()
 * @param { object } item {item:"Item description" } the new mongodb document, it's mean a register
 */
async function create(model, item){
    return await model.create(item);
};

/**
 * A funcionaliti for create mongose model interaction with nodejs
 * @param { mongoose.model } model a model create with mongoose, new mongoose.model()
 * @param { object } query a posible query to make
 */
async function read(model, query={}) {
    return await model.find(query);
};

/**
 * A funcionaliti for delete mongose model interaction with nodejs
 * @param { mongoose.model } model a model create with mongoose, new mongoose.model()
 * @param { object } query a posible query to make
 */
async function del(model, query={}) {
    return await model.deleteOne(query);
};

module.exports = { create, read, del, defaultItems}