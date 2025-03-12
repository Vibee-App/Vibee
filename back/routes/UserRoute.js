const express = require('express');
const  {login,registerUser,registerCompany } = require('../controllers/AuthController');
const { authenticateJWT, authorizeRole } = require('../middlewares/AuthMiddleware');

const router = express.Router();

// Route de connexion
router.post('/login', login);

//Register par type user
router.post('/registerUser', registerUser);
router.post('/registerCompany',registerCompany );

module.exports = router;