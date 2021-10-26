var express = require('express');
const timeController = require('../controllers/time.controller');
var router = express.Router();

//time
router.get('/', timeController.index);



router.get('/:time/:status/:_id', timeController.changeActive);
module.exports = router;
