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
          model: 'Users', // Table des utilisateurs
          key: 'accountId', // Clé primaire dans la table Users
        },
        onDelete: 'CASCADE', // Supprimer la réservation si l'utilisateur est supprimé
      },
      eventId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Events', // Table des événements
          key: 'id', // Clé primaire dans la table Events
        },
        onDelete: 'CASCADE', // Supprimer la réservation si l'événement est supprimé
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
    // Revenir en arrière et supprimer la table 'Reservations'
    await queryInterface.dropTable('Reservations');
  }
};
