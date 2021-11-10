const mongoose = require('mongoose');
const sale = new mongoose.Schema({
    sale: {
        type: Number
    },
}, {
    timestamps: true
});
const saleModel = mongoose.model('sale', sale)

module.exports = saleModel
