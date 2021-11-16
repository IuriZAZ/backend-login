const Sequelize = require('sequelize')
const database = new Sequelize('bc_bsd', 'root', 'oby123456', {
    host: 'localhost',
    dialect: 'mysql'
})

database.authenticate().then(() => {
    console.log('Conectado')
}).catch((error) => {
    console.log('Deu B.O meu compadre' + ' - ' + 'Erro: ' + error)
});

module.exports = database;