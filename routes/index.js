var express = require('express');
const accountController = require('../controllers/account.controller');
const authController = require('../controllers/auth.controller');
var router = express.Router();

/* GET home page. */
router.get('/', authController.checkLoginPage, function(req, res, next) {
  res.render('pages/login', { layout: 'layouts/auth' });
});

router.get('/logout', authController.logout);


router.post('/', authController.login);



module.exports = router;
