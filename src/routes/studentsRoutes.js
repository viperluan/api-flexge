const express = require('express');
const studentsRoutes = express.Router();

studentsRoutes.get('/', async (request, response) => {
  try {
    const { name } = request.query;

    if (name) {
      const searchStudentsByNameService = require('../services/students/searchStudentsByNameService');

      const students = await searchStudentsByNameService(name);

      return response.json({ status: 'Sucesso', students });
    }

    const searchStudentsService = require('../services/students/searchStudentsService');

    const students = await searchStudentsService();

    return response.json({ status: 'Sucesso', students });
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

    const updateOneStudentService = require('../services/students/updateOneStudentService');

    const student = await updateOneStudentService({ id, name, age, course, school });

    response.json(student);
  } catch (error) {
    response.json({ status: 'Erro', message: error.message });
  }
});

studentsRoutes.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const deleteStudentService = require('../services/students/deleteStudentService');

    await deleteStudentService(id);

    response.status(204).send();
  } catch (error) {
    response.json({ status: 'Erro', message: error.message });
  }
});

module.exports = studentsRoutes;
