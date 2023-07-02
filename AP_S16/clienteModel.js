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
// no model Cliente
class Cliente extends Sequelize.Model {
  static associate(models) {
    this.belongsToMany(models.Produto, {
      through: 'ClienteProduto',
      foreignKey: 'cliente_id',
      otherKey: 'produto_id',
    });
  }
}


// no model ClienteProduto
class ClienteProduto extends Sequelize.Model {
  static associate(models) {
    this.belongsTo(models.Cliente, { foreignKey: 'cliente_id' });
    this.belongsTo(models.Produto, { foreignKey: 'produto_id' });
  }
}


module.exports = ClienteModel;
