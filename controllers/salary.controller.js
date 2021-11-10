const accountModel = require("../models/account");
const saleModel = require("../models/sale");
const userModel = require("../models/user");
const salaryservice = require("../services/salary.service");
const userService = require("../services/user.service");

class SalaryController {

    constructor(service) {
        this.service = service
    }

    index = async (req, res, next) => {
        try {
            const query = req.query
            let datas = await this.service.getAll(query)
            const sale = await saleModel.find({})
            const acc = await accountModel.findById(req.signedCookies.userId)
            // console.log('acc',acc);
            if (acc.role !== 'admin') {
                datas = datas.filter(item => item._id == acc.user)
            }
            res.render('pages/salary', {
                datas,
                sale: sale[0].sale
            });
        } catch (error) {
            next(error)
        }

    };

    show = async (req, res, next) => {
        try {
            const id = req.params._id
            const data = await this.service.getDetail(id)
            return res.render('pages/salaryDetail', {
                data
            }); 
        } catch (error) {
            next(error)
        }
    };

    update = async (req, res, next) => {
        try {
            const update = req.body
            const _id = req.params._id
            const query = {
                _id
            }

            await this.service.update(query, update)
            return res.redirect('/salary')
        } catch (error) {
            next(error)
        }
    };

    sale = async (req, res, next) => {
        try {
            const data = req.body
            const sale = await saleModel.find({})
            if (sale.length === 0) {
                await saleModel.create(data)
            }
            await saleModel.updateOne({ _id: sale[0]._id }, data)
            return res.redirect('/salary')
        } catch (error) {
            next(error)
        }
    };
}

const salaryController = new SalaryController(salaryservice)

module.exports = salaryController