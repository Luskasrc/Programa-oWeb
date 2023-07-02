const Sequelize = require('sequelize');

class Produto {
  constructor(sequelize) {
    this.sequelize = sequelize;
    this.model = sequelize.define('produto', {
      Id_Produto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Nome_Produto: {
        type: Sequelize.STRING(32),
        allowNull: false,
      },
      Preco: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      Descricao: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      Quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  }

  async listarTodos() {
    return this.model.findAll();
  }

  async buscarPorId(id) {
    return this.model.findByPk(id);
  }

  async criar(produto) {
    return this.model.create(produto);
  }

  async atualizar(id, produto) {
    const registro = await this.buscarPorId(id);
    if (registro) {
      return registro.update(produto);
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
// no model Produto
class Produto extends Sequelize.Model {
  static associate(models) {
    this.belongsToMany(models.Cliente, {
      through: 'ClienteProduto',
      foreignKey: 'produto_id',
      otherKey: 'cliente_id',
    });
  }
}


module.exports = Produto;
