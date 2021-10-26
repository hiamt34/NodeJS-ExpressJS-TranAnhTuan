var express = require('express');
const { userController } = require('../controllers/user.controller');
var router = express.Router();

//user
router.get('/', userController.index);
router.get('/action/delete/:_id', userController.delete);
router.get('/action/edit/:_id', userController.show);

router.get('/add', function (req, res, next) {
  res.render('pages/userDetail');
});


router.post('/add', userController.store);
router.post('/edit/:_id', userController.update);

module.exports = router;
