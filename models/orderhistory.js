'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      orderHistory.belongsTo(models.User, {
        foreignKey: 'UserId',
      });
      orderHistory.belongsTo(models.tour, {
        foreignKey: 'TempatWisataId',
      });
      orderHistory.belongsTo(models.Order, {
        foreignKey: 'OrderId',
      });
    }
  }
  orderHistory.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      TempatWisataId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'tours',
          key: 'id',
        },
      },
      OrderId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Orders',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'orderHistory',
    }
  );
  return orderHistory;
};
