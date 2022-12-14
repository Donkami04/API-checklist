const express = require('express');
const app = express();
const userRouter = require('./user.routes');
const config = require('../config/config');
const errors = require('../middleware/errors');


app.use(express.json());

app.use('/api/', userRouter);

app.use(errors);

app.listen(config.mongodb.portUser, () => {
    console.log(`Users Listening on portUser ${config.mongodb.portUser}`)
});

