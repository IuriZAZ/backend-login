const mysql = require('mysql')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('bc_bsd', 'root', 'oby123456', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('Deu bom')
}).catch((error) => {
    console.log(error)
});