var express = require('express');
var router = express.Router();

const title = 'Mator'

router.get('/', function(req, res, next) {
  res.render('contact', {title: title});
});

module.exports = router;
