class PatternController {

    constructor(service) {
        this.service = service
    }

    index = async (req, res, next) => {
        try {
            const query = req.query
            const data = await this.service.getAll(query)
            return res.status(200).json({
                mes: 'success',
                data
            })
        } catch (error) {
            next(error)
        }
        
    };

    show = async (req, res, next) => {
        try {
            const id = req.params.id
            const data = await this.service.getDetail(id)
            return res.status(200).json({
                mes: 'success',
                data
            })
        } catch (error) {
            next(error)
        }
    };
};

module.exports = PatternController