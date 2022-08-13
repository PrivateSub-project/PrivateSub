const SubscriptionModel = require('../models/subscription-model');
const CreditCardModel = require('../models/creditcard-model');
const logger = require('../logger');

exports.addSubscription = async (req, res) => {
  try {
    const newSubscription = await SubscriptionModel.create(req.body);
    const updatedCC = await CreditCardModel.findOne({ number: req.body.creditCard }).exec();
    updatedCC.amount = updatedCC.amount - req.body.price;
    updatedCC.spent = updatedCC.spent + req.body.price;
    await updatedCC.save();
    res.status(200).json({
      message: `Subscription added successfully`,
      data: { ...newSubscription._doc, spent: updatedCC.spent },
    });
  } catch (error) {
    logger.error(error);
    res.status(500).json({ message: `Error creating subscription` });
  }
};

exports.getSubscriptions = async (req, res) => {
  try {
    const subscriptions = await SubscriptionModel.find({ user: req.params.id });
    res.status(200).json({
      message: `A list of subscriptions for user ${req.params.id}`,
      data: subscriptions,
      length: subscriptions.length,
    });
  } catch (error) {
    logger.error(error);
    res.status(500).json({ message: `Error getting subscriptions` });
  }
};

exports.deleteSubscription = async (req, res) => {
  try {
    const result = await SubscriptionModel.deleteOne({ _id: req.params.id });
    res.status(200).json({
      message: `Subscription with id ${req.params.id} successfully deleted`,
      result: result,
    });
  } catch (error) {
    logger.error(error);
    res.status(404).json({ message: `Cannot find subscription with provided id` });
  }
};

exports.updateSubscription = async (req, res) => {
  try {
    const result = await SubscriptionModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: `Subscription with id ${req.params.id} successfully updated`,
      result: result,
    });
  } catch (error) {
    logger.error(error);
    res.status(404).json({ message: `Cannot find subscription with provided id` });
  }
};
