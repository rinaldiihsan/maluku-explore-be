'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, {
        foreignKey: 'UserId',
      });
      Order.belongsTo(models.tour, {
        foreignKey: 'TempatWisataId',
      });
      Order.hasMany(models.orderHistory, { foreignKey: 'OrderId' });
    }
  }
  Order.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id',
        },
      },
      TempatWisataId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'tour',
          key: 'id',
        },
      },
      jumlahTiket: DataTypes.INTEGER,
      tanggalOrder: DataTypes.DATE,
      totalHarga: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );
  return Order;
};
