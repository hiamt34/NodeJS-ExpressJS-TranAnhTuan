const userservice = require("../services/user.service")

class UserController {
    constructor(service) {
        this.service = service
    }

    index = async (req, res, next) => {
        try {
            const query = req.query
            const datas = await this.service.getAll(query)
            res.render('pages/user', {
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
            return res.render('pages/userDetail', {
                data
            });
        } catch (error) {
            next(error)
        }
    };

    store = async (req, res, next) => {
        try {
            const data = req.body
            await this.service.create(data)
            return res.redirect('/user')
        } catch (error) {
            next(error)
        }
    };

    delete = async (req, res, next) => {
        try {
            const id = req.params._id
            await this.service.destroy(id)
            return res.redirect('/user')
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
            return res.redirect('/user')
        } catch (error) {
            next(error)
        }
    };
}

const userController = new UserController(userservice)

module.exports = {
    UserController,
    userController
}
