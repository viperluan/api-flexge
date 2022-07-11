require('dotenv').config();

const createConnectionDB = require('./db/connection');
createConnectionDB().then(() => console.log('Successful connected to mongo atlas.'))
  .catch(error => console.log('Failed to connect on mongo atlas.'));

const EXPRESS_PORT = process.env.PORT;
const express = require('express');
const app = express();
const router = require('./routes/router');

app.use(express.json());
app.use(router);

app.listen(EXPRESS_PORT, () => console.log(`Server started on port: ${EXPRESS_PORT}`));
