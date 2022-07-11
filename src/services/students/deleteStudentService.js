async function deleteStudentService(id) {
  const StudentModel = require('../../models/Student');

  const student = await StudentModel.findOneAndDelete({ _id: id });

  if (!student)
    throw new Error('Aluno não encontrado!');

  return student;
}

module.exports = deleteStudentService;
