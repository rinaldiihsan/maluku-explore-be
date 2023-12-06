'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class imagesBlog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      imagesBlog.hasOne(models.blog, {
        foreignKey: 'imageId',
      });
    }
  }
  imagesBlog.init(
    {
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'imagesBlog',
    }
  );
  return imagesBlog;
};
