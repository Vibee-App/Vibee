const { DataTypes } = require('sequelize');
const sequelize = require('../config/Db.js');


const Event = sequelize.define('Event', {
  ID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  DateDebut: {
    type: DataTypes.DATE,
    allowNull: false
  },
  DateFin: {
    type: DataTypes.DATE,
    allowNull: false
  },
  Lieu: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Adresse: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Tags: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Tarif: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Image: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: true, 
});


module.exports = Event;
