// const express = require('express')

// const app = express()

// Create
// app.post('/usuarios/', async (req, res) => {
(async () => {
    const database = require('./connect')
    const Servico = require('./models/servico')
    const Usuario = require('./models/usuario')

    await database.sync({force: true});

    const novoUsuario = await Usuario.create({
        nome: 'Matiello',
        email: 'irui@gmail.com',
        senha: '654321',
    })

    const novoServico = await Servico.create({
        data_entrada: '2021-06-26',
        data_saida: '2021/06/29',
        descricao: 'MacBook Pro com problema na tela',
        preco_mobra: '679',
        preco_peca: '220',
        idUsuario: novoUsuario.id
    })

    console.log(novoServico)
})();
    // })

    // Read
    // app.get('/usuarios/login', async (req, res) => {
    // (async () => {
    //     const database = require('./connect')
    //     const Servico = require('./models/servico')
    //     const Usuario = require('./models/usuario')

    //     await database.sync();

    //     const services = await Servico.findByPk(1)
    //     const cliente = await services.getUsuario()

    //     console.log(cliente.nome)

    //     // const users = Usuario.findByPk(1)
    //     // console.log(users)
    // })
