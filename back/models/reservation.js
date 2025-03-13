const { DataTypes } = require('sequelize');
const sequelize = require('../config/Db.js');

const Reservation = sequelize.define('Reservation', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Users', // La table des utilisateurs
      key: 'accountId', // La clé primaire de la table Users
    },
    onDelete: 'CASCADE', // Supprime la réservation si l'utilisateur est supprimé
  },
  eventId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Events', // La table des événements
      key: 'id', // La clé primaire de la table Events
    },
    onDelete: 'CASCADE', // Supprime la réservation si l'événement est supprimé
  },
}, {
  timestamps: true,  // Ajoute createdAt et updatedAt à cette table
});

module.exports = Reservation;
