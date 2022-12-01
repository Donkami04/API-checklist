const express = require('express');
const app = express();
const users = require('./users/user.routes');
const config = require('./config/config');

app.use(express.json());

app.get('/api', (req, res) => {
    res.send('This is the Homeee')
});


app.listen(config.api.port, () => {
    console.log(`App Listening on port ${config.api.port}`)
});

app.use('/api/users', users);
