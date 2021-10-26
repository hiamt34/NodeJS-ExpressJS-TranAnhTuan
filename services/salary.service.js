const userModel = require("../models/user")
const PatternService = require("./pattern.service")

const salaryservice = new PatternService(userModel);

module.exports = salaryservice;