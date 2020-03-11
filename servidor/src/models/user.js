const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    avatarUrl: {
        type: String,
    },
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

