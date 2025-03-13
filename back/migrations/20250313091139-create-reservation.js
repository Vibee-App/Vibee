'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Création de la table 'Reservations' pour gérer la relation entre Users et Events
    await queryInterface.createTable('Reservations', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Users', 
          key: 'accountId',
        },
        onDelete: 'CASCADE', 
      },
      eventId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Events', 
          key: 'id', 
        },
        onDelete: 'CASCADE', 
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

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('Reservations');
  }
};
