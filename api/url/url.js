var express = require('express');
var router = express.Router();
var url = require('./url.controller');

router.post('/shorten', url.registerURL);
router.get('/:encoded_id', url.searchURL);

module.exports = router;
