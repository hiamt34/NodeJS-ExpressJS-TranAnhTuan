const mongoose = require('mongoose');
const account = new mongoose.Schema({
    email: {
        type: String, unique: true, required: true
    },
    password: {
        type: String, required: true
    },
    active: {
        type: Boolean, default: false
    },
    user: {
        type: String, unique: true, ref: 'user',required: true, trim: true
    },
    role: {
        type: String, required: true, trim: true
    }
}, {
    timestamps: true
});
const accountModel = mongoose.model('account', account)

module.exports = accountModel
