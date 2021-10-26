
const userModel = require("../models/user")
const PatternService = require("./pattern.service")

const userservice = new PatternService(userModel);

module.exports = userservice;