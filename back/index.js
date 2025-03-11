require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./models');
const eventRoutes = require('./routes/EventRoute');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/events', eventRoutes);

const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
  });
});