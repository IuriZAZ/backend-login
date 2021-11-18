const Sequelize = require('sequelize')
const sequelize = require('../connect')
const servico = require('./servico')

const usuario = sequelize.define('usuario', {
    id_usuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'servicos',
            key: 'id_servico',
        }
    },
    nome_usuario: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email_usuario: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha_usuario: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = usuario;