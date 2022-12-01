const { MongoClient } = require("mongodb");
const config = require('../config/config');

const uri = config.mongodb.uri;
const MyDB = new MongoClient(uri)
const database = MyDB.db('MyDB');

// async function run() {
//     try {
//       const database = MyDB.db('MyDB');
//       const movies = database.collection('users');
//       // Query for a movie that has the title 'Back to the Future'
//       const movie = await movies.find().toArray();
//       console.log(movie);
//     } finally {
//       // Ensures that the client will close when you finish/error
//       await client.close();
//     }
//   }
//   run().catch(console.dir);

async function getUsers () {

        const info = database.collection('users');
        const projection = { password: 0}
        const users = await info.find().project(projection).toArray();
        await MyDB.close();
        return users;
        
};

module.exports = {getUsers}
