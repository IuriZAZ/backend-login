const mysql = require('mysql')
const sequelize = require('./models')

// ODS / Nota Fiscal - ENVIANDO INFORMAÇÕES ???
const ods = sequelize.define('servico', {
    id_servico: {

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