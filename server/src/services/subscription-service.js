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
