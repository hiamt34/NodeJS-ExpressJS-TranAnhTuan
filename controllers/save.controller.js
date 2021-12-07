const saveservice = require("../services/save.service")

class SaveController {
    constructor(service) {
        this.service = service
    }

    index = async (req, res, next) => {
        try {
            const query = req.query
            const datas = await this.service.getAll(query)
            res.render('pages/save', {
                datas,
            });
        } catch (error) {
            next(error)
        }

    };

    show = async (req, res, next) => {
        try {
            const id = req.params._id
            const data = await this.service.getDetail(id)
            return res.render('pages/saveDetail', {
                data
            });
        } catch (error) {
            next(error)
        }
    };

    store = async (req, res, next) => {
        try {
            console.log(req.file);
            const data = {
                name: req.body.name,
                url: req.file.filename
            }
            await this.service.create(data)
            return res.redirect('/save')
        } catch (error) {
            next(error)
        }
    };

    delete = async (req, res, next) => {
        try {
            const id = req.params._id
            await this.service.destroy(id)
            return res.redirect('/save')
        } catch (error) {
            next(error)
        }
    };

    update = async (req, res, next) => {
        try {
            const update = {
                name: req.body.name,
            }
            if(req.file){
                update = {
                    ...update,
                    url: req.file.filename
                }
            }
            const _id = req.params._id
            const query = {
                _id
            }
            await this.service.update(query, update)
            return res.redirect('/save')
        } catch (error) {
            next(error)
        }
    };
}

const saveController = new SaveController(saveservice)

module.exports = {
    saveController
}