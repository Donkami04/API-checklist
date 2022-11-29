const express = require('express');
const router = express.Router();
const {getUsers} = require('./mongo.controller');

router.get('/:table',
    async function find(req, res, next) {
        const users = await getUsers(req.params.table);
        res.json(users)
    }
);

module.exports = router;