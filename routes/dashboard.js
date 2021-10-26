var express = require('express');
const userModel = require('../models/user');
const accountModel = require("../models/account")

var router = express.Router();
//dashboard
router.get('/', async function (req, res, next) {
    const users = await userModel.count();
    const accounts = await accountModel.count();
    const punishs = await userModel.find({ $or: [{ punish: '' }, { punish: null }] }).count()
    res.render('pages/dashboard',{
        users,
        accounts,
        punishs: users - punishs
    });
});

module.exports = router;
