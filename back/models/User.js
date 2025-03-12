const { DataTypes } = require('sequelize');
const sequelize = require('../config/Db.js');
const Account = require('./account.js');

const User = sequelize.define('User', {
  accountId: {  
    type: DataTypes.UUID,
    primaryKey: true,  // 🚀 Indique que c'est la clé primaire
    allowNull: false,
  },
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
