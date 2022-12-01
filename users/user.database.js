const mongoose = require('mongoose');

async function connection (req, res, next) {
    try {
            mongoose.connect("mongodb+srv://admin:camilo123@mycluster.ttsjgw9.mongodb.net/UsersDB?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (error) {
        next(error)
    }
};

module.exports = connection;






