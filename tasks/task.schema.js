const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema ({

    
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    responsible: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'users',
        required: false
    }],
    dateCreation: {
        type: Date, default: Date.now 
    },
    dateMax: {
        type: Date,
    },


});
const taskModel = mongoose.model('tasks', TaskSchema);

module.exports = taskModel ;

