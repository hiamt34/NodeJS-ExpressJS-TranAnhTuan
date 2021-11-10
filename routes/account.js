var express = require('express');
const accountController = require('../controllers/account.controller');
const authController = require('../controllers/auth.controller');
const userservice = require("../services/user.service")
var router = express.Router();

//account
router.get('/',authController.checkRole, accountController.index);
router.get('/:status/:_id',authController.checkRole, accountController.changeActive);
router.get('/action/delete/:_id',authController.checkRole, accountController.delete);
router.get('/action/edit/:_id',authController.checkRole, accountController.show);


router.get('/add',authController.checkRole,async function(req, res, next) {
  const datas = await userservice.getAll({})
  res.render('pages/accountDetail',{
    datas
  });
});
 
router.post('/add',authController.checkRole ,accountController.store);
router.post('/edit/:_id',authController.checkRole, accountController.update);
module.exports = router;