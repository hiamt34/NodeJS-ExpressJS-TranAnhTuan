const salaryservice = require("../services/salary.service")

class SalaryController  {

    constructor(service) {
        this.service = service
    }

    index = async (req, res, next) => {
        try {
            const query = req.query
            const datas = await this.service.getAll(query)
            res.render('pages/salary', {
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
            console.log(query, update);

            await this.service.update(query, update)
            return res.redirect('/salary')
        } catch (error) {
            next(error)
        }
    };
}

const salaryController = new SalaryController(salaryservice)

module.exports = salaryController