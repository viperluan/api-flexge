async function searchOneStudentService({ id, name, age, course, school }) {
  const StudentModel = require('../../models/Student');

  const student = await StudentModel.findOneAndUpdate(
    { _id: id },
    { name, age, course, school },
    { returnDocument: 'after' }
  );

  if (!student)
    throw new Error('Aluno não encontrado!');

  return student;
}

module.exports = searchOneStudentService;
