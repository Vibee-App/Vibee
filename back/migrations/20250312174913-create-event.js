'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      IdCreateur: {
        type: Sequelize.UUID
      },
      DateDebut: {
        type: Sequelize.DATE
      },
      DateFin: {
        type: Sequelize.DATE
      },
      Lieu: {
        type: Sequelize.STRING
      },
      Adresse: {
        type: Sequelize.STRING
      },
      Tags: {
        type: Sequelize.STRING
      },
      Tarif: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.STRING
      },
      Image: {
        type: Sequelize.STRING
      },
      Nom: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Events');
  }
};