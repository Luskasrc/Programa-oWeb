const Sequelize = require('sequelize');

class ClienteModel {
  constructor(sequelize) {
    this.sequelize = sequelize;
    this.model = sequelize.define('cliente', {
      Id_Cliente: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING(32),
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true,
      },
      telefone: {
        type: Sequelize.STRING(11),
        allowNull: true,
      },
      endereco: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
    });
  }

  async listarTodos() {
    return this.model.findAll();
  }

  async buscarPorId(id) {
    return this.model.findByPk(id);
  }

  async criar(cliente) {
    return this.model.create(cliente);
  }

  async atualizar(id, cliente) {
    const registro = await this.buscarPorId(id);
    if (registro) {
      return registro.update(cliente);
    }
    return null;
  }

  async excluir(id) {
    const registro = await this.buscarPorId(id);
    if (registro) {
      await registro.destroy();
      return true;
    }
    return false;
  }
}

module.exports = ClienteModel;
