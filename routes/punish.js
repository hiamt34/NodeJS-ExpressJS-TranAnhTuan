var express = require('express');
const authController = require('../controllers/auth.controller');
const punishController = require('../controllers/punish.controller');
var router = express.Router();

//punish
router.get('/', punishController.index);

router.get('/action/edit/:_id',authController.checkRole, punishController.delete);

router.get('/add',authController.checkRole,  punishController.add);



// router.post('/edit/:_id', punishController.update);
router.post('/add',authController.checkRole,  punishController.update);
module.exports = router;