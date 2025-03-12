const express = require('express');
const { login, register } = require('../controllers/AuthController');
const { getUserById } = require('../controllers/UserController');
const { authenticateJWT, authorizeRole } = require('../middlewares/AuthMiddleware');

const router = express.Router();

// Route de connexion
router.post('/login', login);

// Route d'inscription
router.post('/register', register);

//Register par type user
router.post('/register', register);
router.post('/register', register);

// Route protégée (accessible seulement pour l'admin)
router.get('/user/:id', authenticateJWT, authorizeRole(['admin']), getUserById);

module.exports = router;