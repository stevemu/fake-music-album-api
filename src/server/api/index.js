'use strict';

var express = require('express');
var _ = require('underscore');

var router = express.Router();

// products

router.get('/test', function(req, res) {
  res.json({test:"success"});
});

module.exports = router;
