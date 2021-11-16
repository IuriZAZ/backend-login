const mysql = require('mysql')
const sequelize = require('./models')

// ODS / Nota Fiscal - ENVIANDO INFORMAÇÕES ???
const ods = sequelize.define('servico', {
    dataEntrada: {
        type: sequelize.DATEONLY,
        allowNull: false
    },
    dataSaida: {
        type: sequelize.DATEONLY,
        allowNull: false
    },
    descricao: {
        type: sequelize.TEXT
    },
    precoMobra: {
        type: sequelize.DOUBLE,
        allowNull: false
    },
    precoPeca: {
        type: sequelize.DOUBLE,
        defaultValue: '0'
    }
})

// Ver no manual sequelize os 'dataTypes' e oq cada um faz...