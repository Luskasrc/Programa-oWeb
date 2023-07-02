const User = require('./user.model.js');

// Função que realiza a busca no modelo de usuário
function searchUser(username, password) {
  // Aqui você implementaria a lógica de busca no banco de dados ou onde os usuários estão armazenados
  // Retorne true se as credenciais coincidirem com um usuário válido, ou false caso contrário

  // Exemplo de busca básica: usuário e senha fixos
  const user = new User('admin', 'password');
  if (user.username === username && user.password === password) {
    return true;
  }
  return false;
}

// Rota de login
function login(req, res) {
  const { username, password } = req.body;

  // Realize a busca no modelo de usuário
  const isValidUser = searchUser(username, password);

  if (isValidUser) {
    res.status(200).json({ message: 'Login bem-sucedido!' });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas.' });
  }
}

module.exports = {
  login,
};
