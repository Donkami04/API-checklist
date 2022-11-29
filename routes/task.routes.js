const express = require('express');
const response = require('../middleware/response');
const router = express.Router();

router.get('/', 
    function (req, res, next) {
        response.success(req, res, 'The tasks', 200)
    });

module.exports = router;