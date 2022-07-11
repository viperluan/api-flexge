async function searchStudentsService() {
  const StudentModel = require('../../models/Student');

  const students = await StudentModel.find();

  return students;
}

module.exports = searchStudentsService;
