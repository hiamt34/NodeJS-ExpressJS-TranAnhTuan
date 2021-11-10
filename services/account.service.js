
const accountModel = require("../models/account")
const PatternService = require("./pattern.service")
class AccountService  extends PatternService {
    getAll = (query) => {
        try {
            return accountModel.find({}).sort(query).populate('user')
        } catch (error) {
            throw new Error(error);
        }
        
    };
}
const accountservice = new AccountService(accountModel);

module.exports = accountservice;