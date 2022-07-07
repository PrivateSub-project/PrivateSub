const express = require('express');
const router = express.Router();
const subscriptionService = require('../services/subscription-service');
const auth = require('../jwt');

router.get('/', auth.authenticateToken, subscriptionService.getSubscriptions);
router.delete('/:id', auth.authenticateToken, subscriptionService.deleteSubscription);

module.exports = router;