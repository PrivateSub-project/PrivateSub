const express = require('express');
const router = express.Router();
const creditCardService = require('../services/creditcard-service');
const auth = require('../jwt');

router.get('/number', auth.authenticateToken, creditCardService.returnCreditCardNumber);
router.get('/:id', auth.authenticateToken, creditCardService.getUserCreditCards);
router.post('/', auth.authenticateToken, creditCardService.saveCreditCard);
router.post('/addFunds', auth.authenticateToken, creditCardService.fundCreditCard);
router.post('/toggleActive', auth.authenticateToken, creditCardService.toggleActive);

module.exports = router;
