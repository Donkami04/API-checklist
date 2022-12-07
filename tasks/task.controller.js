const connection = require('./task.database');
const taskModel = require('./task.schema');
const mongoose = require('mongoose')

connection();

class TaskService {
    constructor (){};
    
    async findTasks (id) {
        if (!id) {
        const tasks = await taskModel.find();
        return tasks;
        } else {
            const tasks = await taskModel.findById(id);
            return tasks;    
        }
    };

    async createTask (info) {
        const newTask = new taskModel({

            title: info.title,
            body: info.body,
            responsible: info.responsible,
            dateCreation: info.dateCreation,
            dateMax: info.dateMax,
            letter: info.letter,
        });
        await newTask.save();
        return newTask;
    };

    async updateTask (id, info) {
        const task = await taskModel.findByIdAndUpdate(id, info, {returnDocument:'after'})
        return task;
    };

    async deleteTask (id) {

        const task = await taskModel.findByIdAndRemove(id);
        fetch('http://localhost:3001/api/users')
        
            // .then(response => response.json())
            // .then(data => console.log(data))
        return task;
    }
};



module.exports = TaskService 