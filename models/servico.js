const Sequelize = require('sequelize')
const database = require('../connect')
const Usuario = require('./usuario')

const Servico = database.define('servico', {
    id_servico: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    data_entrada: {
        type: Sequelize.DATE,
        allowNull: false
    },
    data_saida: {
        type: Sequelize.DATE,
        allowNull: false
    },
    descricao: Sequelize.STRING,
    preco_peca: Sequelize.DECIMAL,
    preco_mobra: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
})

Servico.belongsTo(Usuario, {
    constraint: true,
    foreignKey: 'idUsuario'
})

module.exports = Servico;