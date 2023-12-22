'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tour.belongsTo(models.imagesTour, {
        foreignKey: 'imageId',
      });
      tour.hasMany(models.Order, { foreignKey: 'tempatWisataId' });
    }
  }
  tour.init(
    {
      nama: DataTypes.STRING,
      kota: DataTypes.STRING,
      harga: DataTypes.INTEGER,
      deskripsi: DataTypes.TEXT,
      imageId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'imagesTours',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'tour',
    }
  );
  return tour;
};
