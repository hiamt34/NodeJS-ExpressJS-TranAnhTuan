const timeservice = require("../services/time.service")

class TimeController  {

    constructor(service) {
        this.service = service 
    }

    index = async (req, res, next) => {
        try {
            const query = req.query
            const datas = await this.service.getAll(query)
            res.render('pages/time', {
                datas
            });
        } catch (error) {
            next(error)
        }

    };

    changeActive = async (req, res, next) => {
        try {
            const active = req.params.status
            const _id = req.params._id
            const time = req.params.time
            const query = {
                _id
            }
            const update = {
                [time]: active
            }
            await this.service.update(query, update)
            return res.redirect('/time')
        } catch (error) {
            next(error)
        }
    };
}

const timeController = new TimeController(timeservice)

module.exports = timeController