const mongoose = require('mongoose');
const { Schema } = mongoose;

const subscriptionSchema = new Schema({
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