const generator = require('creditcard-generator');
const CreditCardModel = require('../models/creditcard-model');
const logger = require('../logger');
//const auth = require('../jwt');

exports.saveCreditCard = async (req, res) => {
  try {
    const newCreditCard = await CreditCardModel.create(req.body);
    res.status(200).json({
      message: `Credit card created successfully`,
      data: newCreditCard,
    });
  } catch (error) {
    logger.error(error);
    res.status(500).json({ message: `Error creating credit card` });
  }
};

exports.returnCreditCardNumber = (req, res) => {
  try {
    if (req.query.type === 'VISA' || req.query.type === 'MasterCard') {
      var numbers = generator.GenCC(req.body.type, 2);
      res.json({
        message: `Credit card number generated successfully`,
        number: numbers,
      });
    } else {
      res.status(400).json({ error: `Card type must be VISA or Mastercard` });
    }
  } catch (error) {
    logger.error(error);
    res.status(500).json(error);
  }
};

exports.getUserCreditCards = async (req, res) => {
  try {
    const creditCards = await CreditCardModel.find({ user: req.params.id });
    res.json({
      message: `A list of credit cards for user ${req.params.id}`,
      data: creditCards,
      length: creditCards.length,
    });
  } catch (error) {
    logger.error(error);
    res.status(500).json(error);
  }
};

exports.fundCreditCard = async (req, res) => {
  try {
    const creditCard = await CreditCardModel.findOne({ number: req.body.number });
    if (!creditCard) {
      res.status(400).json({
        message: `Credit card not found`,
      });
    } else {
      creditCard.amount += req.body.amount;
      await creditCard.save();
      res.status(200).json({
        message: `Credit card amount updated`,
        amount: creditCard.amount,
      });
    }
  } catch (error) {
    logger.error(error);
    res.status(500).json(error);
  }
};

exports.toggleActive = async (req, res) => {
  try {
    const creditCard = await CreditCardModel.findOne({ number: req.body.number });
    if (!creditCard) {
      res.status(400).json({
        message: `Credit card not found`,
      });
    } else {
      if (creditCard.active) {
        creditCard.active = false;
      } else {
        creditCard.active = true;
      }
      await creditCard.save();
      res.status(200).json({
        message: `Credit card active toggled`,
        active: creditCard.active,
      });
    }
  } catch (error) {
    logger.error(error);
    res.status(500).json(error);
  }
};

exports.updateCreditCard = async (req, res) => {
  try {
    const result = await CreditCardModel.findOne(
      { number: req.body.creditCard },
      {
        new: true,
      }
    );
    res.status(200).json({
      message: `Credit card with id ${req.params.id} successfully updated`,
      result: result,
    });
  } catch (error) {
    logger.error(error);
    res.status(404).json({ message: `Cannot find subscription with provided id` });
  }
};
