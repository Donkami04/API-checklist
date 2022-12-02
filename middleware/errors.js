const response = require('./response');

//This function will define all will happen when an error apears.

function errors(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!');

};

module.exports = errors;