const database = require('./connect')
const Servico = require('./models/servico')
const Usuario = require('./models/usuario')
const express = require('express')

const PORT = process.env.PORT || 3005

var http = require('http')

const app = express()

app.use(express.json())

// URL default
app.get('/', (req, res) => {
    res.json('Sequelize rodando').status(200)
})

// Read for User
app.get('/users/', async (req, res) => {

    await database.sync();

    res.json(
        await Usuario.findAll()
    )
    res.status(200);

})

// Read for Services
app.get('/services/', async (req, res) => {

    await database.sync();

    res.json(await Servico.findAll()).status(200);

})

// Create User
app.post('/usuarios/', async (req, res) => {

    await database.sync();

    const novoUsuario = await Usuario.create({
        nome: 'Cardoso',
        email: 'amon.ra@gmail.com',
        senha: 'oby123456',
    })

    const {nome, email, senha} = req.body

    res.json(req.body)
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

    const novoServico = await Servico.create({
        produto: 'Macbook Pro',
        data_entrada: '2021-07-29',
        data_saida: '2021/07/31',
        descricao: 'Problema no SSD',
        preco_mobra: '780',
        preco_peca: '230',
        id: novoUsuario.id
    })

    res.json(novoServico).status(200, 'Created')
})

var server = http.createServer(app)
server.listen(PORT)
console.log("Rodando na porta: " + PORT)