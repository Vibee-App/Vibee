const express = require('express');
const  {login,registerUser,registerCompany } = require('../controllers/AuthController');
const { authenticateJWT, authorizeRole } = require('../middlewares/AuthMiddleware');

const router = express.Router();

// Route de connexion
/**
 * @swagger
 * /api/authent/login:
 *   post:
 *     summary: Se connecter
 *     description: Authentifie un utilisateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: "john_doe"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: Connexion réussie
 *       400:
 *         description: Paramètres invalides
 */
router.post('/login', login);

//Register par type user
/**
 * @swagger
 * /api/authent/registerUser:
 *   post:
 *     summary: Enregistrer un nouvel utilisateur
 *     description: Crée un nouvel utilisateur avec les informations fournies
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: "john_doe"
 *               email:
 *                 type: string
 *                 example: "john.doe@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       201:
 *         description: Utilisateur enregistré avec succès
 *       400:
 *         description: Paramètres invalides
 */
router.post('/registerUser', registerUser);

// Route pour enregistrer une entreprise
/**
 * @swagger
 * /api/authent/registerCompany:
 *   post:
 *     summary: Enregistrer une nouvelle entreprise
 *     description: Crée une nouvelle entreprise avec les informations fournies
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               companyName:
 *                 type: string
 *                 example: "ABC Corporation"
 *               companyEmail:
 *                 type: string
 *                 example: "contact@abccorp.com"
 *               companyPassword:
 *                 type: string
 *                 example: "companyPassword123"
 *     responses:
 *       201:
 *         description: Entreprise enregistrée avec succès
 *       400:
 *         description: Paramètres invalides
 */
router.post('/registerCompany', registerCompany);

module.exports = router;