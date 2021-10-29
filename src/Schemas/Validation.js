const mongoose = require("mongoose")
const Yup = require("yup")
const schemaModel = require("./Mongo/User")

const Controller = async (req, res) => {

    const userController = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        senha: Yup.string().required().min(6),
        senhaConfim: Yup.string().required().min(6)
    })

    if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ mensagem: 'Erro na validacao dos campos' });
    }

    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
        return res.status(400).json({ mensagem: 'Usuario ja existe.' });
    }

    const { nome, email, senha, senhaConfirm } = await User.create(req.body);

    return res.status(201).json({ id, name, email });

    if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ mensagem: 'Erro na validacao dos campos' });
    }
}

module.exports = Controller;