const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
  creditCards: [String],
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
