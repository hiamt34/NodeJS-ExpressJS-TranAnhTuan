var express = require('express');
var router = express.Router();

//salary
router.get('/', function (req, res, next) {
    res.render('pages/salary');
});

module.exports = router;
