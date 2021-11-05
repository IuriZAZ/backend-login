const mongoose = require("mongoose")
// https://blog.betrybe.com/desenvolvimento-web/yup/

const schemaModel = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    senhaConfirm: { type: String, required: true },
})

const User = mongoose.model('User', schemaModel)

module.exports = User;
