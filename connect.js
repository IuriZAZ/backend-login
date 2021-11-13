const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost:3306',
    user: 'root',
    password: 'Iurinm8900', /*Verificar*/
    database: 'bc_bsd'
});

connection.connect((err) => {
    if(err) throw err;
    console.log('Conectado no banco')
});

module.exports = connection;