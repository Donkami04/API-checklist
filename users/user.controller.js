const connection = require('../database/database');
const userModel = require('./user.schema');
const taskModel = require('../tasks/task.schema');
const mongoose = require('mongoose')
connection();

class UserService {
    constructor (){};
    
    async findUsers (id) {
        if (!id) {
        const users = await userModel.find();
        return users;
        } else {
            const user = await userModel.findById(id);
            return user;    
        }
    };

    async createUser (info) {
        const newUser = new userModel({
            name: info.name,
            email: info.email,
            phone: info.phone,
            tasks: info.tasks,
        });
        await newUser.save();
        return newUser;
    };

    async updateUser (id, info) {
        const user = await userModel.findByIdAndUpdate(id, info, {returnDocument:'after'})
        return user;
    };

    async deleteUser (id) {
        const user = await userModel.findByIdAndRemove(id);
        // The below line remove the user from the tasks
        await taskModel.updateMany({responsible: id}, {$pullAll: {responsible:[id]}});
        return user;
    }

    
};



module.exports = UserService 