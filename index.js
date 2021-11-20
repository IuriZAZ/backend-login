const express = require('express')
const sequelize = require('./connect')
const servico = require('./models/servico')
const usuario = require('./models/usuario')

const app = express()

// Create
app.post('/usuarios/', async (req, res) => {
    await sequelize.sync();
    const novoServico = servico.create({
        data_entrada: '2021-05-20',
        data_saida: '2021/05/29',
        descricao: 'MacBook Pro não liga',
        preco_mobra: '230',
        preco_peda: '150'
    })

    const novoUsuario = usuario.create({
        id_servico: 3,
        nome_usuario: 'Tony',
        email_usuario: 'tony@gmail.com',
        senha_usuario: '000000'
    })

    console.log(novoUsuario)
})

// Read
app.get('/usuarios/login', async (req, res) => {
    await sequelize.sync();
    

    const services = servico.findByPk(2)
    console.log(services)

    const users = usuario.findByPk(3)
    console.log(users)
})