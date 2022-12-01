const express = require('express');
const router = express.Router();

// const response = require('../middleware/response');

const UserService = require('./user.controller');
const service = new UserService();

router.get('/users', findUsers);

async function findUsers (req, res, next) {
    try {
        const allUsers = await service.findUsers(req.params.id);
        res.json(allUsers)
    } catch (error) {
        // response.error(req, res, "Internal Error", 500 );
        next(error);
        } 
    };

module.exports = router;