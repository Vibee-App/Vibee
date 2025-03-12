const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Account = require('./LastAccount');
const { type } = require('os');

const Company = sequelize.define('Company', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adresse:{
    type: DataTypes.STRING,
    allowNull:false
  },
  siret:{
    type:DataTypes.STRING,
    allowNull:false
  },
  phoneNumber:{
    type:DataTypes.STRING,
    allowNull:true
  },
  webSite:{
    type:DataTypes.STRING,
    allowNull:true
  }
}, {
  timestamps: true,
});

// Relation : Une `Company` appartient à `Account`
Company.belongsTo(Account, { foreignKey: 'accountId', onDelete: 'CASCADE' });

module.exports = Company;
