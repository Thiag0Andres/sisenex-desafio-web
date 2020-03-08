const User = require('../models/user');

module.exports = {
    //Realiza a busca
    async index(request, response) {
        console.log(request.query);    

        return response.json({ users: [] });
    }
}