'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Order, {
        foreignKey: 'userId',
      });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      namaLengkap: DataTypes.STRING,
      deskripsi: DataTypes.TEXT,
      password: DataTypes.STRING,
      passwordSalt: DataTypes.STRING,
      refreshToken: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
