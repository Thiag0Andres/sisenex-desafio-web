const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },

    number: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('User', UserSchema);