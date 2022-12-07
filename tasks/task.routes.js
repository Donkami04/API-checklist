const express = require('express');
const router = express.Router();
const response = require('../middleware/response');

const TaskService = require('./task.controller');
const service = new TaskService();


router.get('/tasks', findTasks);
router.get('/tasks/:id', findTasks);
router.post('/tasks/', createTask);
router.patch('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

async function findTasks (req, res, next) {
    try {
        const allTasks = await service.findTasks(req.params.id);
        res.json(allTasks)
    } catch (error) {
        next(error);
        } 
};

async function createTask (req, res, next) {
    try {
        const task = await service.createTask(req.body);
        response.success(req, res, task, 200)
    } catch (error) {
        next(error);
    }
};

async function updateTask (req, res, next) {
    try {
        console.log(req.body, "entro la info")
        const task = await service.updateTask(req.params.id, req.body);
        res.json(task);
    } catch (error) {
        next(error);
    }
};

async function deleteTask (req, res, next) {
    try {
        await service.deleteTask(req.params.id);
        response.success(req, res, 'The Task was eliminated successfully', 200)
    } catch (error) {
        next(error);
    }
};




module.exports = router;