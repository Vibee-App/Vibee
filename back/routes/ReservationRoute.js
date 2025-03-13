const express = require('express');
const ReservationController = require('../controllers/ReservationController');
const { authenticateJWT } = require('../middlewares/AuthMiddleware');
const router = express.Router();


/**
 * @swagger
 * /api/reservation:
 *   get:
 *     summary: Récupérer toutes les réservations
 *     description: Récupère une liste de toutes les réservations dans le système.
 *     tags: [Reservations]
 *     responses:
 *       200:
 *         description: Liste des réservations récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reservation'
 *       500:
 *         description: Erreur serveur interne
 */
router.get('/',authenticateJWT,ReservationController.getAllReservation);

/**
 * @swagger
 * /api/reservation:
 *   post:
 *     summary: Créer une nouvelle réservation
 *     description: Crée une nouvelle réservation pour un utilisateur et un événement spécifié.
 *     tags: [Reservations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reservation'
 *     responses:
 *       201:
 *         description: Réservation créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reservation'
 *       400:
 *         description: Mauvaise requête, données invalides
 *       500:
 *         description: Erreur serveur interne
 */
router.post('/',authenticateJWT, ReservationController.createReservation);

module.exports = router;