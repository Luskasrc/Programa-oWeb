const express = require('express');
const bodyParser = require('body-parser');
const ClienteController = require('./clienteController');
const app = express();
const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'mysql',
  host: 'localhost'
});

// Resto do código do servidor...


// Middleware para o body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas
app.get('/', (req, res) => {
  res.send('API do Cliente');
});


// Rotas para clientes
app.get('/clientes', (req, res) => ClienteController.show(req, res));
app.post('/clientes', (req, res) => ClienteController.store(req, res));
app.put('/clientes/:id', (req, res) => ClienteController.update(req, res));
app.delete('/clientes/:id', (req, res) => ClienteController.destroy(req, res));

const ProdutoModel = require('./produtoModel');
const ProdutoController = require('./produtoController');

const produtoModel = new ProdutoModel(sequelize);


app.get('/produtos', async (req, res) => {
  try {
    const produtos = await produtoController.listarTodos();
    return res.json({ produtos });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
});

// Rota para buscar um produto por ID
app.get('/produtos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const produto = await produtoController.buscarPorId(id);
    if (produto) {
      return res.json(produto);
    }
    return res.status(404).json({ mensagem: "Produto não encontrado" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
});

// Rota para criar um novo produto
app.post('/produtos', async (req, res) => {
  const { nome, descricao, preco } = req.body;
  try {
    const produto = await produtoController.criar({ nome, descricao, preco });
    return res.json(produto);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
});

// Rota para atualizar um produto existente
app.put('/produtos/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, descricao, preco } = req.body;
  try {
    const produto = await produtoController.atualizar(id, { nome, descricao, preco });
    if (produto) {
      return res.json(produto);
    }
    return res.status(404).json({ mensagem: "Produto não encontrado" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
});

// Rota para excluir um produto existente
app.delete('/produtos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const sucesso = await produtoController.excluir(id);
    if (sucesso) {
      return res.status(204).send();
    }
    return res.status(404).json({ mensagem: "Produto não encontrado" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
});

// Inicia o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
