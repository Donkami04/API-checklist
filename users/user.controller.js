const connection = require('./user.database');
const userModel = require('./user.schema');
const mongoose = require('mongoose')

connection();

class UserService {
    constructor (){};
    
    async findUsers (id) {
        if (!id) {
        const users = await userModel.find({}) 
        return users
        };
        const user = await userModel.find({})
    
    };

    

    // async findOne (id) {
    //     const info = database.collection('users');
    //     const projection = { password: 0}
    //     const query = { age: id }
    //     const oneUser = await info.findOne(query);
    //     return oneUser;
    // };

};



module.exports = UserService 