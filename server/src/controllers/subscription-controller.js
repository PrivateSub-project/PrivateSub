const express = require('express');
const router = express.Router();
const subscriptionService = require('../services/subscription-service');
const auth = require('../jwt');

router.post('/', auth.authenticateToken, subscriptionService.addSubscription);

module.exports = router;