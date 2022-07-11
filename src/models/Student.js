const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String,
  school: String
});

const Student = mongoose.model('Student', studentSchema, 'Student');

module.exports = Student;
