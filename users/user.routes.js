const express = require('express');
const router = express.Router();


const UserService = require('./user.controller');
const service = new UserService();

router.get('/users', findUsers);
router.get('/users/:id', findUsers);
router.delete('/users/:id', deleteUser);
router.post('/users/', createUser);
router.patch('/users/:id', updateUser);

async function findUsers (req, res, next) {
    try {
        const allUsers = await service.findUsers(req.params.id);
        res.json(allUsers)
    } catch (error) {
        next(error);
        } 
};

async function deleteUser (req, res, next) {
    try {
        const user = await service.deleteUser(req.params.id);
        // crear mensaje JSON para devolver cuando el usuario sea eliminado
        res.json(user);
    } catch (error) {
        next(error);
    }
};

async function createUser (req, res, next) {
    try {
        const user = await service.createUser(req.body);
        // crear mensaje JSON para devolver cuando el usuario sea eliminado
        res.json(user);
    } catch (error) {
        next(error);
    }
};

async function updateUser (req, res, next) {
    try {
        console.log(req.body, "entro la info")
        const user = await service.updateUser(req.params.id, req.body);
        // crear mensaje JSON para devolver cuando el usuario sea eliminado
        res.json(user);
    } catch (error) {
        next(error);
    }
};


module.exports = router;