'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class imagesTour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      imagesTour.hasOne(models.tour, {
        foreignKey: 'imageId',
      });
    }
  }
  imagesTour.init(
    {
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'imagesTour',
    }
  );
  return imagesTour;
};
