const mongoose = require('mongoose');
const { Schema } = mongoose;

const subscriptionSchema = new Schema({
  serviceName: {
    type: String,
    required: [true, 'Must provide service name'],
  },
  startDate: {
    type: String,
    required: [true, 'Must provide start date'],
  },
  endDate: {
    type: String,
    required: [true, 'Must provide end date'],
  },
  creditCardId: {
    type: Number,
    unique: true,
    required: [true, 'Must provide credit card identifier'],
  },
  user: {
    type: Number,
    unique: true,
    required: [true, 'Must provide user identification'],
  }
});

const subscriptionModel = mongoose.model('Subscription', subscriptionSchema);

module.exports = subscriptionModel;
