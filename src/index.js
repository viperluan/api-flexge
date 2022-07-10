require('dotenv').config();

const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.json({'message': 'teste'})
});

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});