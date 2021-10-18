var express = require('express');
const accountController = require('../controllers/account.controller');
var router = express.Router();

//account
router.get('/', accountController.index);
router.get('/:status/:_id', accountController.changeActive);
router.get('/action/delete/:_id', accountController.delete);
router.get('/action/edit/:_id', accountController.show);


router.get('/add', function(req, res, next) {
  res.render('pages/accountDetail');
});

router.post('/add', accountController.store);
router.post('/edit/:_id', accountController.update);
module.exports = router;