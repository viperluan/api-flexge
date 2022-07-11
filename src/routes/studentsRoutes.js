const express = require('express');
const studentsRoutes = express.Router();

studentsRoutes.get('/', async (request, response) => {
  try {
    const searchStudentsService = require('../services/students/searchStudentsService');

    const students = await searchStudentsService();

    response.json({ status: 'Sucesso', students });
  } catch (error) {
    response.json({ status: 'Erro', message: error.message });
  }
});

studentsRoutes.post('/', async (request, response) => {
  try {
    const { name, age, course, school } = request.body;

    if (!name || !age)
      return response.json({ status: 'Erro', message: 'Necessário nome e idade para cadastro!'});

    const createStudentService = require('../services/students/createStudentService');

    const student = await createStudentService({ name, age, course, school });

    response.status(201).json({ status: 'Sucesso', message: student })
  } catch (error) {
    response.json({ status: 'Erro', message: error.message });
  }
});

studentsRoutes.put('/:id', async (request, response) => {
  try {
    const { name, age, course, school } = request.body;
    const { id } = request.params;

    if (!id || !name)
      return response.json({ status: 'Erro', message: 'Necessário ID para efetuar atualização!'});

    const searchOneStudentService = require('../services/students/searchOneStudentService');

    const student = await searchOneStudentService({ id, name, age, course, school });

    response.json(student);
  } catch (error) {
    response.json({ status: 'Erro', message: error.message });
  }
});

studentsRoutes.delete('/', (request, response) => {
  response.send();
});

module.exports = studentsRoutes;
