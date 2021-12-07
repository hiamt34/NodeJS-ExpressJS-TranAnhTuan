var express = require('express');
const authController = require('../controllers/auth.controller');
const { saveController } = require('../controllers/save.controller');
const multer = require('multer');

// chọn file để lưu ảnh
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
var upload = multer({
    storage: storage
})

var router = express.Router();

//save
router.get('/', saveController.index);


router.get('/action/delete/:_id', authController.checkRole, saveController.delete);
router.get('/action/edit/:_id', authController.checkRole, saveController.show);

router.get('/add', authController.checkRole, function (req, res, next) {
    res.render('pages/saveDetail');
});

router.post('/add', upload.single("url"), authController.checkRole, saveController.store);
router.post('/edit/:_id', upload.single("url"), authController.checkRole, saveController.update);

module.exports = router;
