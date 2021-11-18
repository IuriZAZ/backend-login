const Sequelize = require('sequelize')

const sequelize = new Sequelize('bc_bsd', 'root', 'oby123456', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;