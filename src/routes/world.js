const express = require('express');
const { create, get, list, getItemDetails } = require('../controllers/worldController');

const router = express.Router();

// Create a world
router.post('/', create);
router.get('/list', list);
router.get('/item-details', getItemDetails);
router.get('/:name', get);

module.exports = router;
