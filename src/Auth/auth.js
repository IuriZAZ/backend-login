const jwt = require('jsonwebtoken')
const promisify = require('util')
const authConfig = './Controller'

export default async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' })
  }
  
//Corrigir o token
  
//   const [, token] = authHeader.split('')

//   try {
//     const decoded = await promisify(jwt.verify)(token, authConfig.secret)

//     console.log(decoded)

//     req.userId = decoded._id;

//     return next()
//   } catch (err) {
//     return res.status(401).json({ error: 'Token invalid' })
//   }
}
