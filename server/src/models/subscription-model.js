const mongoose = require('mongoose');
const { Schema } = mongoose;

const subscriptionSchema = new Schema({
<<<<<<< HEAD
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
=======
    brand: {
        type: String,
        required: [true, 'Must provide subscription name']
    },
    url: {
        type: String,
    },
    user: {
        type: String,
        required: [true, 'Must provide user name']
    },
    price: {
        type: Number,
        required: [true, 'Must provide subscription price'],
    },
    creditCard: {
        type: String,
        required: [true, 'Must provide credit card'],
    },
    status: {
        type: String,
        required: [true, 'Must provide status'],
    },
    imgUrl: {
        type: String,
    },
})

const SubscriptionModel = mongoose.model('Subscription', subscriptionSchema);

module.exports = SubscriptionModel;
>>>>>>> 65f81e56379bcb2664bc16e2a0ab746761112d77
