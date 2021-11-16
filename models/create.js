const mysql = require('mysql')
const database = require('./models')

// ODS / Nota Fiscal
const ods_insert = database.define('servico', {
    id_servico: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_usuario: {
        type: database.STRING,
        allowNull: false
    },
    data_entrada: {
        type: database.DATEONLY,
        allowNull: false
    },
    data_saida: {
        type: database.DATEONLY,
        allowNull: false
    },
    preco_mobra: {
        type: database.DOUBLE,
        allowNull: false
    },
    preco_peca: {
        type: database.DOUBLE,
        defaultValue: '0'
    },
    valor_total: {
        type: database.INTERGER,
        values: [preco_mobra + preco_peca]
    }
})