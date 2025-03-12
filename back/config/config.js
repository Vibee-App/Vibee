require('dotenv').config(); // Charger les variables d'environnement

module.exports = {
  development: {
    username: process.env.POSTGRESQL_ADDON_USER || "fallback_user",
    password: process.env.POSTGRESQL_ADDON_PASSWORD || "fallback_password",
    database: process.env.POSTGRESQL_ADDON_DB || "fallback_db",
    host: process.env.POSTGRESQL_ADDON_HOST || "fallback_host",
    port: process.env.POSTGRESQL_ADDON_PORT || 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // Clever Cloud nécessite SSL
      }
    }
  },
  production: {
    username: process.env.POSTGRESQL_ADDON_USER,
    password: process.env.POSTGRESQL_ADDON_PASSWORD,
    database: process.env.POSTGRESQL_ADDON_DB,
    host: process.env.POSTGRESQL_ADDON_HOST,
    port: process.env.POSTGRESQL_ADDON_PORT || 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres"
  }
};
