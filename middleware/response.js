exports.success = function(req, res, message, status) { 

    let statusCode = status || 200;
    let statusMessage = message || '';

    res.status(status).send({
        status: statusCode,
        message: statusMessage
    })

};

