const accountModel = require("../models/account");

class AuthController {
    login = async (req, res, next) => {
        try {
            const query = {
                ...req.body,
                active: true
            }
            const data = await accountModel.findOne(query)
            if (!data) {
                throw new Error('Sai tài khoản, mật khẩu hoặc tài khoản chưa được active');
            }
            res.cookie('userId', data._id, {
                signed: true
            })
            return res.redirect('/dashboard')
        } catch (error) {
            next(error)
        }
    };

    checkLogin = async (req, res, next) => {
        if (!req.signedCookies.userId) {
            return res.redirect('/')
        } else {
            const data = await accountModel.findById(req.signedCookies.userId)
            if (!data) {
                return res.redirect('/')
            }
        }

        return next()
    };

    checkLoginPage = async (req, res, next) => {
        if (req.signedCookies.userId) {
            const data = await accountModel.findById(req.signedCookies.userId)
            if (!data) {
                return res.redirect('/')
            }
            return res.redirect('/dashboard')
        } else {
            next()
        }
    };

    logout = (req, res, next) => {
        res.clearCookie("userId")
        return res.redirect('/')
    }
}

const authController = new AuthController

module.exports = authController