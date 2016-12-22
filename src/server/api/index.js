'use strict';

var express = require('express');
var router = express.Router();

// products

router.get('/test', function(req, res) {
  console.log(req.body);
  res.json({test:"success"});
});

module.exports = router;
