var express = require('express');
var router = express.Router();

var example = require('./functions/example.js');

router.get('/test', example.test);

// 404 error
router.all('/*', function(req, res) {
  res.status(404).send();
  return;
});

module.exports = router;
