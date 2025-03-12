// Importation des modules nécessaires
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const express = require('express');  // Importation de Express
const process = require('process');
const basename = path.basename(__filename);  // Nom du fichier actuel
const env = process.env.NODE_ENV || 'development';  // Environnement (par défaut 'development')
const config = require(__dirname + '/config/config.js')[env];  // Chargement de la config en fonction de l'environnement
const db = {};

// Initialisation de l'application Express
const app = express();
const port = 4000;  // Port sur lequel le serveur écoutera



app.use(express.json());

// Middleware pour traiter les données URL-encodées
app.use(express.urlencoded({ extended: true }));

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Chargement des modèles Sequelize
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&  // Ignorer les fichiers cachés
      file !== basename &&         // Ignorer le fichier courant
      file.slice(-3) === '.js' &&  // Ne charger que les fichiers .js
      file.indexOf('.test.js') === -1  // Ne pas charger les fichiers de test
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Associer les modèles si nécessaire
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Définir les routes
app.use('/api/authent', require('./routes/UserRoute.js'));

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

// Exporter les configurations et modèles
module.exports = db;
