const Sequelize = require('sequelize')
const sequelize = new Sequelize('bc_bsd', 'root', 'oby123456', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('Conectado')
}).catch((error) => {
    console.log('Deu B.O meu compadre' + ' - ' + 'Erro: ' + error)
});

module.exports = sequelize;