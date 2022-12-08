const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema ({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'tasks',
        required: false,

    }]

});


const userModel = mongoose.model('users', UserSchema);



module.exports = userModel ;

