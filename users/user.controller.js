// const {MyDB} = require('../mongodb/index.db');
// const database = MyDB.db('MyDB');
// const info = database.collection('users');

class UserService {
    constructor (){};
    
    async getusers () {
        const projection = { password: 0}
        const users = await info.find().project(projection).toArray();
        await MyDB.close();
        return users;
    }

};

module.exports = UserService 