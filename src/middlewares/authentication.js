function authentication(request, response, next) {
  const TOKEN = `Bearer ${process.env.TOKEN}`;
  const requestToken = request.headers.authorization;

  if(requestToken !== TOKEN && request.url !== '/user/login')
    return response.status(401).json({ status: 'Erro', message: 'Necessária autenticação para prosseguir.'})

  next();
}

module.exports = authentication;
