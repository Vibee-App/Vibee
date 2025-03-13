const express = require('express');
const  {login,registerUser,registerCompany } = require('../controllers/AuthController');
const { authenticateJWT, authorizeRole } = require('../middlewares/AuthMiddleware');

const router = express.Router();

// Route de connexion
router.post('/login', login);
router.post('/register', register);

// Route protégée (accessible seulement pour l'admin)
router.get('/user/:id', authenticateJWT, authorizeRole(['admin']), getUserById);
//Register par type user
router.post('/registerUser', registerUser);
router.post('/registerCompany',registerCompany );

module.exports = router;