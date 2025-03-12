const express = require('express');
const eventRoutes = require('./routes/EventRoute');

const app = express();

app.use(express.json()); // Middleware pour parser le JSON
app.use('/api', eventRoutes); // Ajoute les routes sous `/api`

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
