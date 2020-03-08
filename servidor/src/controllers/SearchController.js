const User = require('../models/user');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    //Realiza a busca
    async index(request, response) {
        console.log(request.query); 
        
        const techsArray =  parseStringAsArray(techs);

        const users = await User.find({
            name: {
                $in: name,
            },
            email: {
                $in: email,
            }
        });

        return response.json({ users: [] });
    }
}