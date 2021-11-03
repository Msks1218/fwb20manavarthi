var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('vegetables', { title: 'search results for vegetables' });
});

module.exports = router;