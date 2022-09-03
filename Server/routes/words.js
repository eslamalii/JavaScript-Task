const express = require('express');
const wordsController = require('../controllers/words');
const words = new express.Router();

words.get('/words', wordsController.getWords);

module.exports = words;
