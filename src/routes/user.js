const express = require('express');
const { get } = require('../controllers/userController');

const router = express.Router();

// Get user data
router.get('/:username', get);

module.exports = router;
