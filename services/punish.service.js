const userModel = require("../models/user")
const PatternService = require("./pattern.service")

const punishservice = new PatternService(userModel);

module.exports = punishservice;