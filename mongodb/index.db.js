const express = require('express');
const app = express();
const routerMongoDB = require('./mongo.routes');
const config = require('../config/config');


app.use(express.json());

app.use('/api/', routerMongoDB);

app.listen(config.mongodb.port, () => {
    console.log(`MongoDB Listening on port ${config.mongodb.port}`)
});

