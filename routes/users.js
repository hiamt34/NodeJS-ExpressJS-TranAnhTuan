var express = require('express');
var router = express.Router();

//user
router.get('/', function(req, res, next) {
  res.render('pages/user');
});

module.exports = router;
