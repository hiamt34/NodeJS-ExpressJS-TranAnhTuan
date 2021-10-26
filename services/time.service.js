const userModel = require("../models/user")
const PatternService = require("./pattern.service")

const timeservice = new PatternService(userModel);

module.exports = timeservice;