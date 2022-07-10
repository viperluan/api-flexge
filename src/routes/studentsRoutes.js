const express = require('express');
const studentsRoutes = express.Router();

studentsRoutes.get('/', (request, response) => {
  response.json({ students: [{ name: 'Maicon', age: 32 }, { name: 'Jonas', age: 21 }]});
});

studentsRoutes.post('/', (request, response) => {
  response.status(201).send();
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