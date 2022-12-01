const express = require('express');
const axios = require('axios');
const router = express.Router();
const {getUsers} = require('./mongo.controller');

router.get('/:table',
    async function find(req, res, next) {
        const users = await getUsers(req.params.table);
        res.json(users)
    }
);

router.get('/users', async (req, res) => {
    axios
})

module.exports = router;