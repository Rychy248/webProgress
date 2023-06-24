
/**
 * A funcionaliti for create mongose model interaction with nodejs
 * @param { mongoose.model } model a model create with mongoose, new mongoose.model()
 * @param { object } item the new mongodb document, it's mean a register
 */
function create(model, item){
    return model.create(item);
};

/**
 * A funcionaliti for create mongose model interaction with nodejs
 * @param { mongoose.model } model a model create with mongoose, new mongoose.model()
 * @param { object } query a posible query to make
 */
function read(model, query={}) {
    let data = model.find(query);
    return data;
};

module.exports = { create, read }