var express = require('express');
const punishController = require('../controllers/punish.controller');
var router = express.Router();

//punish
router.get('/', punishController.index);

router.get('/action/edit/:_id', punishController.delete);

router.get('/add',  punishController.add);



// router.post('/edit/:_id', punishController.update);
router.post('/add',  punishController.update);
module.exports = router;