const express = require('express');
const router = express.Router();
const userService = require('../services/user-service');

router.post('/login', userService.loginUser);
router.post('/register', userService.registerUser);

module.exports = router;
