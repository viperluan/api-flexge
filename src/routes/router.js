const express = require('express');
const router = express.Router();

const studentsRoutes = require('./studentsRoutes');
const userRoutes = require('./userRoutes');

router.use('/students', studentsRoutes);
router.use('/user', userRoutes);

module.exports = router;
