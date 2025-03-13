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
      model: 'Users', 
      key: 'accountId', 
    },
    onDelete: 'CASCADE', 
  },
  eventId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Events', 
      key: 'id',
    },
    onDelete: 'CASCADE', 
  },
}, {
  timestamps: true,  
});

module.exports = Reservation;
