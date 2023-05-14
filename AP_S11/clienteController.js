const ClienteModel = require('./clienteModel');

class ClienteController {
  async index(req, res) {
    try {
      const clientes = await ClienteModel.listarTodos();
      return res.json({ clientes });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
  }

  async show(req, res) {
    try {
      const cliente = await ClienteModel.buscarPorId(req.params.id);
      if (cliente) {
        return res.json(cliente);
      } else {
        return res.status(404).json({ mensagem: "Cliente não encontrado" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
  }

  async store(req, res) {
    try {
      const novoCliente = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
      };

      const cliente = await ClienteModel.criar(novoCliente);
      return res.json({ mensagem: "Cliente criado com sucesso", cliente });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
  }

  async update(req, res) {
    try {
      const cliente = await ClienteModel.buscarPorId(req.params.id);
      if (cliente) {
        cliente.nome = req.body.nome || cliente.nome;
        cliente.cpf = req.body.cpf || cliente.cpf;
        cliente.telefone = req.body.telefone || cliente.telefone;
        cliente.endereco = req.body.endereco || cliente.endereco;

        await ClienteModel.atualizar(cliente);

        return res.json({ mensagem: "Cliente atualizado com sucesso", cliente });
      } else {
        return res.status(404).json({ mensagem: "Cliente não encontrado" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
  }

  async destroy(req, res) {
    try {
      const cliente = await ClienteModel.buscarPorId(req.params.id);
      if (cliente) {
        await ClienteModel.remover(cliente.id);

        return res.json({ mensagem: "Cliente removido com sucesso" });
      } else {
        return res.status(404).json({ mensagem: "Cliente não encontrado" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
  }
}

module.exports = new ClienteController();
