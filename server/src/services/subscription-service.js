const SubscriptionModel = require('../models/subscription-model');
const logger = require('../logger');

exports.addSubscription = async (req, res) => {
    try {
        const newSubscription = await SubscriptionModel.create(req.body);
        res.status(200).json({
            message: `Subscription added successfully`,
            data: newSubscription,
        });
    } catch (error) {
        logger.error(error);
        res.status(500).json({ message: `Error creating subscription `});
    }
};