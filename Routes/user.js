const mongoose = require('mongoose')
const axios = require('axios').create({ baseURL: "http://localhost:3030/" })
const User = require('../Models/mongo')

const userRoute = (app) => {

    mongoose.connect('mongodb+srv://Iuri:admin123@cluster0.ndtwj.mongodb.net/test')

    app.route('/usuario')
        .post((req, res) => {
            const { nome, email, senha, senhaConfirm } = req.body
            const newUser = new User(req.body)
            if (nome != null && email != null && senha != null && senhaConfirm != null) {
                newUser.save(req.body)
                    .then((result) => {
                        res.json(result)
                    }).catch((error) => {
                        res.json(error)
                    })
                return res.status(201, 'Created').json(req.body)
            } else {
                return res.status(400, 'Bad request').json('erro no post')
            }
        })

    app.route('/usuario/login/')
        .get(async (req, res) => {
            const { email, senha } = req.body
            const usuarios = await User.find(email, senha)
            res.status(200, 'Ok').json(usuarios)
        })

    app.route('/usuario/remove/')
        .delete(async (req, res) => {
            const { nome, email, senha, senhaConfirm } = req.body
            const usersDel = await User.remove(nome)
            res.status(202, 'Accepted').json(usersDel)
        })
}

module.exports = userRoute;