(async () => {

    const Sequelize = require('sequelize')
    const sequelize = require('../connect')
    const servico = require('./servico')
    const usuario = require('./usuario')

    then(function() {
        
        usuario.belongsTo(servico, {
            constraint: true, 
            foreignKey: 'id_servico'
        });

        const resultado = await sequelize.sync({force: true})
        console.log(resultado)
        
    }).catch(function(error) {

        console.log('Deu BO' + error)

    })
    
})();