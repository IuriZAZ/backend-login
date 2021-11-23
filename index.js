const database = require('./connect')
const Servico = require('./models/servico')
const Usuario = require('./models/usuario')
const express = require('express')

const port = 3005

const app = express()

app.use(express.json())

// Read for User
app.get('/users/', async (req, res) => {

    await database.sync();

    res.json(await Usuario.findAll()).status(200);

})

// Read for Services
app.get('/services/', async (req, res) => {

    await database.sync();

    res.json(await Servico.findAll()).status(200);

})

// Create User
app.post('/usuarios/', async (req, res) => {

    await database.sync();

    let novoUsuario = await Usuario.create({
        nome: 'Tony',
        email: 'abertolim@gmail.com',
        senha: '656565',
    })

    res.json(novoUsuario).status(201, 'Created')

    // Validando cadastro do Usuario
    // if (novoUsuario == usuarioCadastrado) {
    //     return res.json('Usuário já existe').status(400)
    // } else {
    //     return await novoUsuario
    // }
})

// Create a Service
app.post('/servicos/', async (req, res) => {

    await database.sync()

    const novoUsuario = req.body

    res.json(
        // Dados enraizados
        await Servico.create({
            produto: 'Macbook Pro',
            data_entrada: '2021-07-29',
            data_saida: '2021/07/31',
            descricao: 'Problema no SSD',
            preco_mobra: '780',
            preco_peca: '230',
            id: novoUsuario.id
        })
    )
    res.status(200, 'Created')
})

app.listen(port, async () => {
    console.log('Conecatado na porta 3005')
})