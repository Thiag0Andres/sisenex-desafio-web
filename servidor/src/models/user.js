const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    //id: String,
    name: {
        type: String,
        required: true,
    },
    //avatarUrl: String,
    email: {
        type: String,
        unique:  true,
        required: true,
    },
    cell: { 
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('User', UserSchema);

