var express = require('express');
var router = express.Router();

//dashboard
router.get('/', function (req, res, next) {
    res.render('pages/dashboard');
});

module.exports = router;
