const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'numLembro',
    database: 'bc_bsd'
});

connection.connect((err) => {
    if(err) throw err;
    console.log('Conectado no banco')
})