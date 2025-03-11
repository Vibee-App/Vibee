'use strict';

require('dotenv').config(); // Charge les variables d'environnement

const Sequelize = require('sequelize');

if (!process.env.DATABASE_URL) {
  console.error("❌ ERREUR: La variable DATABASE_URL n'est pas définie !");
  process.exit(1);
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Obligatoire pour Clever Cloud
    }
  }
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
