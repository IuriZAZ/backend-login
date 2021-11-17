const mysql = require('mysql')
const Sequelize = require('sequelize')
const sequelize = require('./models')


const ods_read = Sequelize.init('read', {
    // Começar a fazer o read -> 'get'
})