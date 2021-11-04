const mongoose = require('mongoose')
const Router = require('express')
const axios = require('axios').create({ baseURL: 'http://localhost:3030/' })
const Controller = require('../Schemas/Controllers/Register')
const ControllerLog = require('../Schemas/Controllers/Login')

mongoose.connect('mongodb+srv://Iuri:admin123@cluster0.ndtwj.mongodb.net/test')

const app = Router()

const userRoute = (app) => {

    app.post('/usuario', Controller.store)
        // .post((req, res) => {
        //     const { nome, email, senha, senhaConfirm } = req.body
        //     const newUser = User(req.body)
        //     if (nome != null && email != null && senha != null && senhaConfirm != null) {
        //         newUser.save(req.body)
        //         return res.status(201).json(User)
        //     } else {
        //         return res.status(400).json('Erro no POST')
        //     }

    app.post('/usuario/login/', ControllerLog.store)
    // .get(async (req, res) => {
    //     const { email, senha } = req.body
    //     const usuarios = await User.find(email, senha)
    //         .then((usuarios) => {
    //             res.status(200).json(usuarios)
    //         }).catch((err) => {
    //             res.status(400).json(err + "Erro no GET")
    //         })
    // })

    app.delete('/usuario/remove/', Controller.store)
        // .delete(async (req, res) => {
        //     const { nome, email, senha, senhaConfirm } = req.body
        //     const usersDel = await User.remove(nome, email, senha, senhaConfirm)
        //     res.status(202).json(usersDel)
        // })
}

module.exports = userRoute;