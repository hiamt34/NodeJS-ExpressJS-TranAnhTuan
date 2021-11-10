const accountservice = require("../services/account.service");
const userservice = require("../services/user.service");

class AccountController {

    constructor(service) {
        this.service = service
    }

    index = async (req, res, next) => {
        try {
            const query = req.query
            const datas = await this.service.getAll(query)
            // console.log(datas);

            res.render('pages/account',{
                datas
            });
        } catch (error) { 
            next(error)
        }
        
    };

    show = async (req, res, next) => {
        try { 
            const id = req.params._id
            const data = await this.service.getDetail(id)
            const datas = await userservice.getAll({})
            return res.render('pages/accountDetail',{
                data,
                datas
            });
        } catch (error) {
            next(error)
        }
    };

    store = async (req, res, next) => {
        try {
            const data = req.body
            await this.service.create(data)
            return res.redirect('/account')
        } catch (error) {
            next(error)
        }
    };

    delete = async (req, res, next) => {
        try {
            const id = req.params._id
            await this.service.destroy(id)
            return res.redirect('/account')
        } catch (error) {
            next(error)
        }
    };

    changeActive = async (req, res, next) => {
        try {
            const active = req.params.status
            const _id = req.params._id
            const query = {
                _id
            }
            const update = {
                active
            }
            await this.service.update(query, update)
            return res.redirect('/account')
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
            console.log(query, update);

            await this.service.update(query, update)
            return res.redirect('/account')
        } catch (error) {
            next(error)
        }
    };
};

const accountController = new AccountController(accountservice)

module.exports = accountController
