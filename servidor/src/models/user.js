const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: String,
    name: String,
    avatarUrl: String,
    email: String,
    cell: String,
});

module.exports = mongoose.model('User', UserSchema);