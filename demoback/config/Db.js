// Chargement des variables d'environnement et configuration Sequelize
require('dotenv').config();
const { Sequelize } = require('sequelize');

// Charger la configuration Sequelize selon l'environnement
const config = require('./config.js');
const env = process.env.NODE_ENV || 'development'; // Par défaut, en mode développement
const dbConfig = config[env];

// Créer une instance de Sequelize avec la configuration
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  pool: dbConfig.pool,
});

module.exports = sequelize;
