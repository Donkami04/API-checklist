const express = require('express');
const router = express.Router();

// const response = require('../middleware/response');

const UserService = require('./user.controller');
const service = new UserService();

router.get('/users', 
    async function findAll (req, res, next) {
        try {
            const allUsers = await service.findAll();
            res.json(allUsers)
        } catch (error) {
            // response.error(req, res, "Internal Error", 500 );
            next(error);
            } 
        });

router.get('/users/:id', 
    async function findOne (req, res, next) {
        try {
            const oneUser = await service.findOne(req.params.id);
            res.json(oneUser)
        } catch (error) {
            // response.error(req, res, "Internal Error", 500 );
            console.error()
            next(error);
            } 
        });

module.exports = router;