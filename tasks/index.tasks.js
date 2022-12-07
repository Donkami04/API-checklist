const express = require('express');
const app = express();
const taskRouter = require('./task.routes');
const config = require('../config/config');
const errors = require('../middleware/errors');


app.use(express.json());

app.use('/api/', taskRouter);

app.use(errors);

app.listen(config.mongodb.portTask, () => {
    console.log(`Tasks Listening on portUser ${config.mongodb.portTask}`)
});

