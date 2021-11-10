var express = require('express');
const authController = require('../controllers/auth.controller');
const timeController = require('../controllers/time.controller');
var router = express.Router();

//time
router.get('/', timeController.index);



router.get('/:time/:status/:_id',authController.checkRole, timeController.changeActive);
module.exports = router;
