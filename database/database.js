const mongoose = require('mongoose');
const config = require('../config/config');

async function connection (req, res, next) {
    try {
            mongoose.connect(config.mongodb.uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (error) {
        next(error)
    }
};

module.exports = connection;






