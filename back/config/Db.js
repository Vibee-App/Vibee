const { Client } = require('pg');

// Crée un client PostgreSQL avec la chaîne de connexion
const client = new Client({
  connectionString: process.env.POSTGRESQL_ADDON_URI,  // Utilisation de la variable d'environnement
  ssl: {
    rejectUnauthorized: false,  // SSL si nécessaire
  },
});

client.connect()
  .then(() => {
    console.log('Connecté à la base de données PostgreSQL');
  })
  .catch((err) => {
    console.error('Erreur de connexion à la base de données', err);
  });

module.exports = client;  // Exporte le client pour utilisation dans d'autres fichiers