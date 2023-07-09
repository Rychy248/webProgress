

const { userModel } = require("./models")

const user = {
    
    model : userModel,

    create : async function (document={}){
        this.model.create(document)
    },

    read: async function (query={}){
        return await this.model.find(query);
    },

};

module.exports = { user }