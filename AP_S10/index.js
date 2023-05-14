const Sequelize = require('sequelize');
const express = require('express');app = express();
const fs = require('fs');


app.use(express.json());

app.get('/', function(req, res) {
  res.send('API Supermercado');
});

let produtos = [{
    "id": 1,
    "nome": "Arroz Branco",
    "descricao": "Saco de arroz de 1kg",
    "preco": 15.99,
    "quantidade": 56
},{
    "id": 2,
    "nome": "Feijão Carioca",
    "descricao": "Saco de Feijão de 1kg",
    "preco": 5.99,
    "quantidade": 80
}];
  
app.get('/produtos', function(req, res) {
    return res.json({ produtos });
  });

app.post("/produtos", (req, res) => {
    // Definir um ID para o novo produto
    const novoId = produtos.length + 1;
  
    // Criar o objeto do novo produto
    const novoProduto = {
      id: novoId,
      nome: req.body.nome,
      descricao: req.body.descricao,
      preco: req.body.preco,
      quantidade: req.body.quantidade,
    };
  
    // Adicionar o novo produto à lista de produtos
    produtos.push(novoProduto);
  
    // Retornar a lista de produtos atualizada
    return res.json({
      mensagem: "Produto criado com sucesso",
      produtos: produtos,
    });
  });

  app.delete('/produtos/:id', function(req, res) {
    const id = req.params.id;
    const index = produtos.findIndex(p => p.id == id);
  
    if (index < 0) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }
  
    produtos.splice(index, 1);
  
    return res.json({ mensagem: "Produto removido com sucesso" });
  });

  app.put('/produtos/:id', function(req, res) {
    var id = req.params.id;
    var produtoIndex = produtos.findIndex(function(produto) {
      return produto.id == id;
    });
    if (produtoIndex != -1) {
      produtos[produtoIndex] = {
        id: id,
        nome: req.body.nome,
        descricao: req.body.descricao,
        preco: req.body.preco,
        quantidade: req.body.quantidade
      };
      res.json(produtos[produtoIndex]);
    } else {
      res.status(404).send('Produto não encontrado');
    }
  });
  
  
  
//Starta o webserver
app.listen(3000, function() {
  console.log('Servidor rodando na porta 3000');
});
