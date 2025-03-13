// Importation des modules nécessaires
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const express = require("express"); // Importation de Express
const process = require("process");
const basename = path.basename(__filename); // Nom du fichier actuel
const env = process.env.NODE_ENV || "development"; // Environnement (par défaut 'development')
const config = require(__dirname + "/config/config.js")[env]; // Chargement de la config en fonction de l'environnement
const db = {};

// Initialisation de l'application Express
const app = express();
const port = process.env.PORT || 4000; // Port sur lequel le serveur écoutera

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// Définir les routes
app.use("/api/authent", require("./routes/UserRoute.js"));
app.use("/api/event", require("./routes/EventRoute.js"));

app.get("/ok", (req, res) => {
  res.send("ok");
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

// Exporter les configurations et modèles
module.exports = db;
