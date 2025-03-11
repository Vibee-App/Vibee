const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Account = require('./LastAccount');

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type:DataTypes.INTEGER,
    allowNull:false,
  }
}, {
  timestamps: true,
});

// Relation : Un `User` appartient à `Account`
User.belongsTo(Account, { foreignKey: 'accountId', onDelete: 'CASCADE' });

module.exports = User;
