// needs to be properly edited.
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        default: 0,
    },
});

const userModel = mongoose.model('User', UserSchema);
module.exports = userModel;
