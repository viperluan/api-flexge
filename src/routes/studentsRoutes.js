const express = require('express');
const studentsRoutes = express.Router();

studentsRoutes.get('/', (request, response) => {
  response.json({ students: [{ name: 'Maicon', age: 32 }, { name: 'Jonas', age: 21 }]});
});

studentsRoutes.post('/', async (request, response) => {
  try {
    const { name, age, course, school } = request.body;

    if(!name || !age)
      return response.json({ status: 'Erro', message: 'Necessário nome e idade para cadastro!'});

    const createStudentService = require('../services/students/createStudentService');

    const student = await createStudentService({ name, age, course, school });

    response.status(201).json({ status: 'Sucesso', message: student })
  } catch (error) {
    response.json({ status: 'Erro', message: error.message });
  }
});

studentsRoutes.patch('/', (request, response) => {
  response.send();
});

studentsRoutes.put('/', (request, response) => {
  response.send();
});

studentsRoutes.delete('/', (request, response) => {
  response.send();
});

module.exports = studentsRoutes;
