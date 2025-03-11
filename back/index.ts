const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors');
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(express.json());

app.use(cors());

app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to the API'
    });
}
);

app.listen(4000, () => {
  console.log('Serveur lancé sur le port http://localhost:4000');
});