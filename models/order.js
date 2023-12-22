'use strict';
const {
    Model
} = require('sequelize');
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
                foreignKey: 'userId',
            });
            Order.belongsTo(models.tour, {
                foreignKey: 'tempatWisataId',
            });
        }
    }
    Order.init({
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id',
            },
        },
        tempatWisataId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tour',
                key: 'id',
            },
        },
        jumlahTiket: DataTypes.INTEGER,
        tanggalOrder: DataTypes.DATE,
        totalHarga: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Order',
    });
    return Order;
};