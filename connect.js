const Sequelize = require('sequelize')
const sequelize = new Sequelize('bc_bsd', 'root', 'oby123456', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('Conectado')
}).catch((error) => {
    console.log(error)
});

module.exports = sequelize;