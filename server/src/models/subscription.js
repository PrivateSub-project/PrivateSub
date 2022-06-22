const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
    serviceName: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    creditCardId: {
        type: Number,
    },
    userId: {
        type: Number,
    },
});

const subscriptionModel = mongoose.model('Subscriptions', SubscriptionSchema);

module.exports = subscriptionModel;
