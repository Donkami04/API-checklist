const express = require('express');
const response = require('../middleware/response');
const router = express.Router();
const UserService = require('../services/user.service')
const service = new UserService();

router.get('/', 
    async function getusers (req, res, next) {
        try {
            const allUsers = await service.getusers();
            res.json({allUsers})
            } catch {
            response.error(req, res)
            } 
        });

module.exports = router;