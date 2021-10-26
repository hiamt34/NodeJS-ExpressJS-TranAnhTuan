const userModel = require("../models/user");
const punishservice = require("../services/punish.service")

class PunishController  {

    constructor(service) {
        this.service = service
    }

    index = async (req, res, next) => {
        try {
            const query = req.query
            const datas = await this.service.getAll(query)
            res.render('pages/punish', {
                datas
            });
        } catch (error) {
            next(error)
        }

    };

    add = async (req, res, next) => {
        try {
            const query = req.query
            const datas = await this.service.getAll(query)
            res.render('pages/punishDetail', {
                datas
            });
        } catch (error) {
            next(error)
        }

    };

    delete = async (req, res, next) => {
        try {
            const _id = req.params._id
            const query = {
                _id
            }
            const update = {
                punish: ''
            }
            await this.service.update(query, update)
            return res.redirect('/punish')
        } catch (error) {
            next(error)
        }
    };

    update = async (req, res, next) => {
        try {
            const Req = req.body
            const data0 = Req.punish.split('-')[0]
            const data1 = Req.punish.split('-')[1]
            console.log(data1);
            const query = {
                _id: Req.name.trim()
            }
            const user = await userModel.findById(Req.name.trim())
            // console.log(user.salary);
            const update = {
                salary: user.salary - Number(data1),
                punish: data0
            }
            await this.service.update(query, update)
            return res.redirect('/punish')
        } catch (error) {
            next(error)
        }
    };
}

const punishController = new PunishController(punishservice)

module.exports = punishController