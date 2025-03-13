const { DataTypes } = require('sequelize');
const sequelize = require('../config/Db.js');  // Vérifie si la connexion est bien configurée dans `Db.js`
const Reservation = require('./reservation.js');

const Event = sequelize.define('Event', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  idCreateur: {
    field: "IdCreateur",
    type: DataTypes.UUID, // idCreateur devrait être un UUID pour correspondre à l'exemple
    allowNull: true,
  },
  DateDebut: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  DateFin: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  Lieu: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Adresse: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Tags: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Tarif: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Image: {
    type: DataTypes.STRING,
    allowNull: true,
  },Nom: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: true,  // Cela activera createdAt et updatedAt
});

Event.hasMany(Reservation, { foreignKey: 'eventId' });
module.exports = Event;
