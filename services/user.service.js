const {MyDB} = require('../mongodb/index.db');
const database = MyDB.db('MyDB');
const info = database.collection('users');

class UserService {
    constructor (){};
    
    async getusers () {
        const projection = { _id: 0, name: 1, email: 1}
        const users = await info.find().project(projection).toArray();
        await MyDB.close();
        return users;
    }

};

module.exports = UserService 