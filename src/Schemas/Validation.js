const mongoose = require("mongoose")
const Yup = require("yup")
const schemaModel = require("./Mongo/User")

const userController = new mongoose.Schema({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    senha: Yup.string().required().min(6),
    senhaConfim: Yup.string().required().min(6)
})

module.exports = userController;