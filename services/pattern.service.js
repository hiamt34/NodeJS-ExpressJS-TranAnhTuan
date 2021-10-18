class PatternService {

    constructor(model) {
        this.model = model
    }

    getAll = (query) => {
        try {
            return this.model.find({}).sort(query)
        } catch (error) {
            throw new Error(error);
        }
        
    };

    getDetail = async (id) => {
        try {
            return this.model.findById(id)
        } catch (error) {
            throw new Error(error);
        }
        
    };

    create = async (data) => {
        try {
            return this.model.create(data)
        } catch (error) {
            throw new Error(error)
        }
    };

    destroy = async (id) => {
        try {
            return this.model.findByIdAndRemove(id).exec()
        } catch (error) {
            throw new Error(error)
        }
    };

    update = async (query, update) => {
        try {
            return this.model.updateOne(query, update)
        } catch (error) {
            throw new Error(error)
        }
    }
};

module.exports = PatternService;
