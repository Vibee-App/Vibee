'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Events', {
      id: { // Utilisation unique de "id" comme clé primaire
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      DateDebut: {
        type: Sequelize.DATE,
        allowNull: false, // Empêche la valeur NULL
      },
      DateFin: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      Lieu: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Adresse: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Tags: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Tarif: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      Image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Events');
  }
};
