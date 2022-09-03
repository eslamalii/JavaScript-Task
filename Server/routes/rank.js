const express = require('express');
const rankController = require('../controllers/rank');
const router = new express.Router();

router.post('/rank', rankController.getRank);

module.exports = router;
