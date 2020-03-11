const axios = require('axios');
const User = require('../models/user');
//const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = { 
    //Listar usuários existentes
    async index(request, response) {
        const users = await User.find();

        return response.json(users);
    },

    //Cadastra novos usuários
    async store(request, response) {
        const { email } = request.body;

        let user = await User.findOne({ email });

        if (!user){
            //const apiResponse = await axios.get(`https://api.github.com/users/${email}`);

            //const { name = login, avatar_url } = apiResponse.data;

            //const techsArray =  parseStringAsArray(techs);
            
             user = await User.create({
                name,
                avatarUrl,
                email,
                cell,
            })
        }
    
        return response.json(user);
    }
};