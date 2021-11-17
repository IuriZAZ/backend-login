const mysql = require('mysql')
const Sequelize = require('sequelize')
const sequelize = require('./models')


export default Database = async () => {

    // Table -> Servico
    const servico = await Sequelize.define('servico', {
        id_servico: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        data_entrada: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        data_saida: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        descricao: {
            type: Sequelize.STRING,
        },
        preco_mobra: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        preco_peca: {
            type: Sequelize.DOUBLE,
            defaultValue: '0'
        },
    })


    // Table -> Usuario
    const usuario = await Sequelize.define('usuario', {
        id_usuario: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'servico',
                foreignKey: id_servico,
                foreignKeyConstraint: true
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
}