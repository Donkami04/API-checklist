const express = require('express');
const app = express();
const users = require('./routes/user.routes');
const tasks = require('./routes/tasks.routes');
const config = require('./config/config');
// const { run } = require('./mongodb/index');

    



// termina

app.use(express.json());

app.get('/api', (req, res) => {
    res.send('Hello User')
});


app.listen(config.api.port, () => {
    console.log(`App Listening on port ${config.api.port}`)
});

app.use('/api/users', users);
app.use('/api/tasks', tasks);