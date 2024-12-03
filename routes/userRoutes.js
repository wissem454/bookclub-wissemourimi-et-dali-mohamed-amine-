const express = require('express');
const { registerUser, loginUser } = require('../cotrollers/userController');  // Fixed path to 'cotrollers'

const router = express.Router();

// Register user route
router.post('/register', registerUser);

// Login user route
router.post('/login', loginUser);

module.exports = router;

