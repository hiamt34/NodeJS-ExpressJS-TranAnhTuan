const mongoose = require('mongoose');
const save = new mongoose.Schema({
    name: {
        type: String
    },
    url: {
        type: String
    }
}, {
    timestamps: true
});
const saveModel = mongoose.model('save', save)

module.exports = saveModel
