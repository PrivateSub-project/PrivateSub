<<<<<<< HEAD
const logger = require('../logger');
const subscriptionService = require('../services/subscription-service');
const subscriptionModel = require('../models/subscription-model');

exports.getSubscriptions = async (req, res) => {
  try {
    const subscriptions = await subscriptionModel.find({ user: req.params.id });
    res.json({
      message: `A list of subscriptions for user ${req.params.id}`,
      data: subscriptions,
      length: subscriptions.length,
    });
    } catch (error) {
    logger.error(error);
    res.status(500).json(error);
    }
}

exports.deleteSubscription = async (req, res) => {
  try {
    const subscription = await subscriptionService.deleteSubscription(req.params.id);
    res.json({
      message: `Subscription ${req.params.id} deleted`,
      data: subscription,
    });
  } catch (error) {
    logger.error(error);
    res.status(500).json(error);
  }
}
=======
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
>>>>>>> 65f81e56379bcb2664bc16e2a0ab746761112d77
