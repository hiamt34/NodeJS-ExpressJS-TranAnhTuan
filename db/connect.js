const mongoose = require('mongoose');
const connect = () => {
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    const dbUri = 'mongodb://localhost/tran-anh-tuan'
    return mongoose
        .connect(dbUri, options)
        .then(() => {
            console.log('connect success');
        })
        .catch((err) => {
            console.log('connect false');
            console.log(err.message);
        });
}

module.exports = connect
