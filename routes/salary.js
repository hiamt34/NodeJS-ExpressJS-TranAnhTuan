var express = require('express');
const salaryController = require('../controllers/salary.controller');
var router = express.Router();

//salary
router.get('/', salaryController.index);
router.get('/action/edit/:_id', salaryController.show);


router.post('/edit/:_id', salaryController.update);
module.exports = router;
