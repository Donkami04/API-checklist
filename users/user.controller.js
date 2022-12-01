const {MyDB, database} = require('../remoteDb/database');

class UserService {
    constructor (){};
    
    async findAll () {
        
        const info = database.collection('users');
        const projection = { password: 0}
        const users = await info.find().project(projection).toArray();
        return users;
    
    };

    async findOne (id) {
        const info = database.collection('users');
        const projection = { password: 0}
        const query = { age: id }
        const oneUser = await info.findOne(query);
        return oneUser;
    };

};

module.exports = UserService 