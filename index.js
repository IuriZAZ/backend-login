const database = require('./connect')
const Servico = require('./models/servico')
const Usuario = require('./models/usuario')
const express = require('express')

const port = 3005

const app = express()

app.use(express.json())

// Read for User
const usuarioCadastrado = app.get(async (req, res) => {

    await database.sync();
    const users = await Usuario.findAll();

    // Funcionando
    console.log(users)

})

// Create User
app.post('/usuarios/', async (req, res) => {

    await database.sync();

    const novoUsuario = await Usuario.create({
        nome: 'Cardoso',
        email: 'amon.ra@gmail.com',
        senha: '123123',
    })

    // Validando cadastro do Usuario
    if (novoUsuario == usuarioCadastrado) {

        return res.json('Usuário já existe').status(400)

    } else {

        return await novoUsuario
        
    }
})

// Create a Service
app.post('/servico', async (req, res) => {

    await database.sync()

    const novoServico = await Servico.create({
        data_entrada: '2021-07-29',
        data_saida: '2021/07/31',
        descricao: 'M1 com problema no SSD',
        preco_mobra: '780',
        preco_peca: '230',
        id: novoUsuario.id
    })
})

app.listen(port, async () => {
    await console.log('Conecatado na pora 3005')
})