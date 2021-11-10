var express = require('express');
const authController = require('../controllers/auth.controller');
const { userController } = require('../controllers/user.controller');
var router = express.Router();

//user
router.get('/', userController.index);


router.get('/action/delete/:_id',authController.checkRole, userController.delete);
router.get('/action/edit/:_id',authController.checkRole, userController.show);

router.get('/add',authController.checkRole, function (req, res, next) {
  res.render('pages/userDetail');
});

router.post('/add',authController.checkRole, userController.store);
router.post('/edit/:_id',authController.checkRole, userController.update);

module.exports = router;
