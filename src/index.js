require('dotenv').config();
const router = require('./routes/router');

const express = require('express');
const app = express();

app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});