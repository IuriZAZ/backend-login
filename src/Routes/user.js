const mongoose = require('mongoose')
const axios = require('axios').create({ baseURL: 'http://localhost:3030/' })
const User = require('../Schemas/Mongo')

mongoose.connect('mongodb+srv://Iuri:admin123@cluster0.ndtwj.mongodb.net/test')

const userRoute = (app) => {

    app.route('/usuario')
        .post((req, res) => {
            const { nome, email, senha, senhaConfirm } = req.body
            const newUser = User(req.body)
            if (nome != null && email != null && senha != null && senhaConfirm != null) {
                newUser.save(req.body)
                return res.status(201).json(User)
            } else {
                return res.status(400).json('Erro no POST')
            }
        })

    app.route('/usuario/login/').get(async (req, res) => {
        const { email, senha } = req.body
        const usuarios = await User.find(email, senha)
            .then((usuarios) => {
                return res.status(200).json(usuarios)
            }).catch((error) => {
                return res.status(400).json('Erro no GET')
            })
    })

    app.route('/usuario/remove/')
        .delete(async (req, res) => {
            const { nome, email, senha, senhaConfirm } = req.body
            const usersDel = await User.remove(nome)
        }).then((usersDel) => {
            return res.status(202).json(usersDel)
        }).catch((error) => {
            return res.status(400).json('Erro no DELETE')
        })
}

module.exports = userRoute;