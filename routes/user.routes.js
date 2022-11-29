const express = require('express');
const response = require('../middleware/response');
const router = express.Router();
const {MyDB} = require('../mongodb');

router.get('/', 
    async function (req, res, next) {
        try {
            const database = MyDB.db('MyDB');
            const info = await database.collection('users');
            const users = await info.find().toArray();
            
            res.json({users})

        } catch {
            response.error(req, res)

        } finally {
            await MyDB.close()
        }
    });

module.exports = router;