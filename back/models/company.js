const { DataTypes } = require('sequelize');
const sequelize = require('../config/Db.js');
const Account = require('./account.js');


const Company = sequelize.define('Company', {
  accountId: {  
    type: DataTypes.UUID,
    primaryKey: true,  
    allowNull: false,
  },
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


Company.belongsTo(Account, { foreignKey: 'accountId', onDelete: 'CASCADE' });

module.exports = Company;
