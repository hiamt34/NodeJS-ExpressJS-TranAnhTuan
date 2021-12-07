const saveModel = require("../models/save")
const PatternService = require("./pattern.service")

const salaryservice = new PatternService(saveModel);

module.exports = salaryservice;