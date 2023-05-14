const ProdutoModel = require('./produtoModel');
const Sequelize = require('sequelize');

const getAll = async (req, res) => {
  try {
    const produtos = await ProdutoModel.listarTodos();
    return res.json({ produtos });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

const getById = async (req, res) => {
  try {
    const produto = await ProdutoModel.buscarPorId(req.params.id);
    if (produto) {
      return res.json({ produto });
    }
    return res.status(404).json({ mensagem: "Produto não encontrado" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

const create = async (req, res) => {
  try {
    const produto = await ProdutoModel.criar(req.body);
    return res.status(201).json({ produto });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

const update = async (req, res) => {
  try {
    const produto = await ProdutoModel.atualizar(req.params.id, req.body);
    if (produto) {
      return res.json({ produto });
    }
    return res.status(404).json({ mensagem: "Produto não encontrado" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

const remove = async (req, res) => {
  try {
    const result = await ProdutoModel.excluir(req.params.id);
    if (result) {
      return res.status(204).end();
    }
    return res.status(404).json({ mensagem: "Produto não encontrado" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

module.exports = { getAll, getById, create, update, remove };

