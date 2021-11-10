var express = require('express');
const authController = require('../controllers/auth.controller');
const salaryController = require('../controllers/salary.controller');
var router = express.Router();

//salary
router.get('/', salaryController.index);
router.get('/action/edit/:_id',authController.checkRole, salaryController.show);


router.post('/edit/:_id',authController.checkRole, salaryController.update);
router.post('/sale',authController.checkRole, salaryController.sale);

module.exports = router;
