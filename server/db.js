const {createPool} = require('mysql');
const connection = createPool({
    host:'localhost',
    user:'root',
    password:'nir123',
    database:'demo',
    multipleStatements: true
});

module.exports = connection;