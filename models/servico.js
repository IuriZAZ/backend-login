const Sequelize = require('sequelize')
const sequelize = require('../connect')


const servico = sequelize.define('servico', {
    id_servico: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    data_entrada: {
        type: Sequelize.DATE,
        allowNull: false
    },
    data_saida: {
        type: Sequelize.DATE,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
    },
    preco_mobra: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    preco_peca: {
        type: Sequelize.DECIMAL,
        defaultValue: '0'
    },
})

module.exports = servico;