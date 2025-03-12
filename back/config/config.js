require('dotenv').config(); // Charger les variables d'environnement depuis .env

module.exports = {
  development: {
    username: process.env.POSTGRESQL_ADDON_USER,
    password: process.env.POSTGRESQL_ADDON_PASSWORD,
    database: process.env.POSTGRESQL_ADDON_DB,
    host: process.env.POSTGRESQL_ADDON_HOST,
    dialect: 'postgres',
    port: process.env.POSTGRESQL_ADDON_PORT,
    pool: {
      max: 10, // Réduit le nombre max de connexions ouvertes
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  production: {
    username: process.env.POSTGRESQL_ADDON_USER,
    password: process.env.POSTGRESQL_ADDON_PASSWORD,
    database: process.env.POSTGRESQL_ADDON_DB,
    host: process.env.POSTGRESQL_ADDON_HOST,
    dialect: 'postgres',
    port: process.env.POSTGRESQL_ADDON_PORT
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres"
  }
};