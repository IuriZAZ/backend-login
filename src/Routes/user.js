const mongoose = require('mongoose')
const Router = require('express')
const axios = require('axios')
const Controller = require('../Schemas/Register')
const ControllerLog = require('../Schemas/Login')

mongoose.connect('mongodb+srv://Iuri:admin123@cluster0.ndtwj.mongodb.net/test')

axios.create({baseURL: 'http://localhost:3030/'})

const route = Router()

const userRoute = (route) => {

    route.post('/usuario/', Controller.store)

    route.get('/usuario/login/', ControllerLog.store)

    route.delete('/usuario/remove/', Controller.store)
}

module.exports = userRoute;