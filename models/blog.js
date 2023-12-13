'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      blog.belongsTo(models.imagesBlog, {
        foreignKey: 'imageId',
      });
    }
  }
  blog.init(
    {
      title: DataTypes.STRING,
      body: DataTypes.STRING,
      imageId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'imagesBlogs',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'blog',
    }
  );
  return blog;
};
