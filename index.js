// Help 

(async () => {

    const sequelize = require('./connect')
    const servico = require('./models/servico')
    const usuario = require('./models/usuario')

    await sequelize.sync();

    // const novoServico = servico.create({
    //     data_entrada: '2021-02-11',
    //     data_saida: '2021/02/16',
    //     descricao: 'Deu BO no MacBook Pro',
    //     preco_mobra: '12',
    //     preco_peda: '12'
    // })

    // const novoUsuario = usuario.create({
    //     id_servico: 1,
    //     nome_usuario: 'Matiello',
    //     email_usuario: 'iuri@gmail.com',
    //     senha_usuario: '654321'
    // })

    console.log(novoUsuario)
    
    const services = servico.findAll()
    console.log(services)

    const users = usuario.findAll()
    console.log(users)

})();