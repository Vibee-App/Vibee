const express = require("express");
const pool = require("./db"); // Import de la connexion

const app = express();
const port = 3000;

app.get("/data", async (req, res) => {
  try {
    const result = await pool.query(
      "CREATE TABLE IF NOT EXISTS test (id SERIAL PRIMARY KEY, name VARCHAR(255))"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des données" });
  }
});

app.get("/", (req, res) => {
  testConnection();
  res.send("Hello World!");
});

async function testConnection(params) {
  try {
    await pool.connect();
    console.log("✅ Connexion à PostgreSQL réussie !");
  } catch (err) {
    console.error("❌ Erreur de connexion à PostgreSQL :", err);
  } finally {
    await pool.end(); // Fermer la connexion
  }
}
app.listen(port, () => {
  console.log(
    `Serveur Express en cours d'exécution sur http://localhost:${port}`
  );
});
