// const { MongoClient } = require("mongodb");
// const config = require('../config/config');

// const uri = config.mongodb.uri;
// const MyDB = new MongoClient(uri);
// const database = MyDB.db('MyDB');


// module.exports = {MyDB, database}
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb+srv://admin:camilo123@mycluster.ttsjgw9.mongodb.net/animales?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}


