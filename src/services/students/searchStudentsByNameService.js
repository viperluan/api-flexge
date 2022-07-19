async function searchStudentsByNameService(name) {
  const StudentModel = require('../../models/Student');

  const regexName = new RegExp(name, 'i');

  const students = await StudentModel.find({ name: {$regex: regexName} });

  return students;
}

module.exports = searchStudentsByNameService;
