const mongoose = require('mongoose');
const { Schema } = mongoose;

const creditCardSchema = new Schema({
  number: {
    type: String,
    unique: true,
    required: [true, 'Must provide credit card number'],
  },
  user: {
    type: String,
    required: [true, 'Must provide user'],
  },
  name: {
    type: String,
    required: [true, 'Must provide name'],
  },
  expiry: {
    type: Number,
    required: [true, 'Must provide expiry date'],
  },
  cvc: {
    type: Number,
    required: [true, 'Must provide cvc'],
  },
  amount: {
    type: Number,
    default: 0,
  },
  spent: {
    type: Number,
    default: 0,
  },
  active: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    required: [true, 'Must provide title'],
  },
  typeOfCard: {
    type: String,
    required: [true, 'Must provide type of'],
  },
});

const CreditCardModel = mongoose.model('CreditCard', creditCardSchema);

module.exports = CreditCardModel;
