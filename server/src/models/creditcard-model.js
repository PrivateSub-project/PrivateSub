const mongoose = require('mongoose');
const { Schema } = mongoose;

const creditCardSchema = new Schema({
  number: {
    type: Number,
    unique: true,
    required: [true, 'Must provide credit card number'],
  },
  user: {
    type: String,
    required: [true, 'Must provide user'],
  },
  expiry: {
    type: String,
    required: [true, 'Must provide expiry date'],
  },
  amount: {
    type: Number,
    default: 0,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

const CreditCardModel = mongoose.model('CreditCard', creditCardSchema);

module.exports = CreditCardModel;
