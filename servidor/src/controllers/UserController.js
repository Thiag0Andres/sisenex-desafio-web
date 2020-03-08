const User = require('../models/user');

module.exports = { 
    //Lista usuários existentes
    async index(request, response) {
        const users = await User.find();

        return response.json(users);
    },

    //Cadastra novos usuários
    async store(request, response) {
        const { name, email, number } = request.body;

        let user = await User.findOne({ email });

        if (!user){
             user = await User.create({
                name,
                email,
                number,
            })
        }
    
        return response.json(user);
    }
};