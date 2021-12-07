const mongoose = require('mongoose');
const user = new mongoose.Schema({
    name: {
        type: String, 
    },
    born: {
        type: String, 
    },
    address: {
        type: String, 
    },
    sex: {
        type: String, 
    },
    position: {
        type: String, 
    },
    phone: {
        type: String
    },
    email: {
        type: String, 
    },
    timec1: {
        type: Boolean, default: false
    },
    timec2: {
        type: Boolean, default: false
    },
    timec3: {
        type: Boolean, default: false
    },
    bonus: {
        type: Number, 
    },
    salary: {
        type: Number, 
    },
    punish: {
        type: String,
    },
    seniority: {
        type: String,
    }
}, {
    timestamps: true
});

const userModel = mongoose.model('user', user)

module.exports = userModel