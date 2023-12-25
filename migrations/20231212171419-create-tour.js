'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tours', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nama: {
        type: Sequelize.STRING,
      },
      kota: {
        type: Sequelize.STRING,
      },
      harga : {
        type: Sequelize.INTEGER,
      },
      deskripsi: {
        type: Sequelize.TEXT,
      },
      imageId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'imagesTours',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tours');
  },
};
