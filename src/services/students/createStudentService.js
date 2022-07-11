async function createStudentService({ name, age, course, school }) {
  const StudentModel = require('../../models/Student');

  const studentAlreadyExists = await StudentModel.findOne({ name });

  if(studentAlreadyExists)
    throw new Error('Estudante existente na base de dados.');

  const student = new StudentModel({ name, age, course, school });

  await student.save();

  return student;
}

module.exports = createStudentService;
