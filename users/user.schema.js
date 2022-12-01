const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema ({

    name: {
        type: String,
        required: true,
    },
    tasks: []

});
const userModel = mongoose.model('users', UserSchema);

module.exports = userModel ;

