
const accountModel = require("../models/account")
const PatternService = require("./pattern.service")

const accountservice = new PatternService(accountModel);

module.exports = accountservice;