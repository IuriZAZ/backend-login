const mysql = require('mysql')
const sequelize = require('./models')

// ODS / Nota Fiscal
const ods = sequelize.define('servico', {
    nome_usuario: {
        type: sequelize.STRING,
        allowNull: false
    },
    data_entrada: {
        type: sequelize.DATEONLY,
        allowNull: false
    },
    data_saida: {
        type: sequelize.DATEONLY,
        allowNull: false
    },
    descricao: {
        type: sequelize.TEXT
    },
    preco_mobra: {
        type: sequelize.DOUBLE,
        allowNull: false
    },
    preco_peca: {
        type: sequelize.DOUBLE,
        defaultValue: '0'
    }
})

// Ver no manual sequelize os 'dataTypes' e oq cada um faz...