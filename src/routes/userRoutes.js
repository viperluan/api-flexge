const express = require('express');
const userRoutes = express.Router();

userRoutes.post('/login', (request, response) => {
  const { email, password } = request.body;

  if(email !== 'viperluan@gmail.com' || password !== '12345')
    return response.json({ status: 'Erro', message: 'Usuário ou senha inválidos.'});

  const TOKEN = process.env.TOKEN;

  response.json({ status: 'Sucesso', message: 'Login realizado com sucesso.', token: TOKEN })
});

module.exports = userRoutes;
