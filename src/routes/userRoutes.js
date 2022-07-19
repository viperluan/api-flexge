const express = require('express');
const userRoutes = express.Router();
const jwt = require('jsonwebtoken');

userRoutes.post('/login', (request, response) => {
  const { email, password } = request.body;

  if(email !== 'viperluan@gmail.com' || password !== '12345')
    return response.json({ status: 'Erro', message: 'Usuário ou senha inválidos.'});

  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 4, // 4h
  });

  response.json({ status: 'Sucesso', message: 'Login realizado com sucesso.', token })
});

module.exports = userRoutes;
