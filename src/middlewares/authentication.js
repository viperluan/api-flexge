const jwt = require('jsonwebtoken');

function authentication(request, response, next) {
  try {
    if (request.url !== '/user/login') {
      const token = request.headers.authorization ? request.headers.authorization.split(' ')[1] : '';
      jwt.verify(token, process.env.JWT_SECRET);
    }

    next();
  } catch (error) {
    return response.status(401).json({ status: 'Erro', message: 'Necessária autenticação para prosseguir.'});
  }
}

module.exports = authentication;
