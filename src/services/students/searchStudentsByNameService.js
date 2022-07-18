async function searchStudentsByNameService(name) {
  const StudentModel = require('../../models/Student');

  const students = await StudentModel.find({ name });

  return students;
}

module.exports = searchStudentsByNameService;
