const mongoose = require('mongoose');
const account = new mongoose.Schema({
    email: {
        type: String, unique: true
    },
    password: {
        type: String
    },
    active: {
        type: Boolean, default: false
    }
}, {
    timestamps: true
});
const accountModel = mongoose.model('account', account)

module.exports = accountModel
