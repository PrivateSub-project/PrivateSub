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
    res.status(500).json({ message: `Error creating subscription` });
  }
};

exports.getSubscriptions = async (req, res) => {
  try {
    const subscriptions = await SubscriptionModel.find({ user: req.params.id });
    res.json({
      message: `A list of subscriptions for user ${req.params.id}`,
      data: subscriptions,
      length: subscriptions.length,
    });
  } catch (error) {
    logger.error(error);
    res.status(500).json({ message: `Error getting subscriptions` });
  }
};
