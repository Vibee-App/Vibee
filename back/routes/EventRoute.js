const express = require('express');
const EventController = require('../controllers/EventController');
const { authenticateJWT } = require('../middlewares/AuthMiddleware');

const router = express.Router();
/** 
* @swagger
* /api/event:
*   get:
*     summary: Obtenir la liste des événements
*     description: Récupère tous les événements
*     responses:
*       200:
*         description: Liste des événements
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 type: object
*                 properties:
*                   id:
*                     type: integer
*                   title:
*                     type: string
*                   description:
*                     type: string
*/
router.get('/',authenticateJWT, EventController.getAllEvents);  

/**
 * @swagger
 * /api/event/{id}:
 *   get:
 *     summary: Récupérer un événement par ID
 *     description: Retourne un événement spécifique en fonction de l'ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: L'ID de l'événement
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: L'événement trouvé
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *       404:
 *         description: Événement non trouvé
 */
router.get('/:id', authenticateJWT,EventController.getEventById);

// Route pour créer un événement
/**
 * @swagger
 * /api/event:
 *   post:
 *     summary: Créer un événement
 *     description: Crée un nouvel événement avec les données fournies
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Nouvel événement"
 *               description:
 *                 type: string
 *                 example: "Description détaillée de l'événement"
 *     responses:
 *       201:
 *         description: Événement créé avec succès
 *       400:
 *         description: Paramètres invalides
 */
router.post('/',authenticateJWT,EventController.createEvent);

// Route pour mettre à jour un événement
/**
 * @swagger
 * /api/event/{id}:
 *   put:
 *     summary: Mettre à jour un événement par ID
 *     description: Met à jour les informations d'un événement spécifique
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: L'ID de l'événement à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Titre modifié"
 *               description:
 *                 type: string
 *                 example: "Description modifiée de l'événement"
 *     responses:
 *       200:
 *         description: Événement mis à jour avec succès
 *       400:
 *         description: Paramètres invalides
 *       404:
 *         description: Événement non trouvé
 */
router.put('/:id',authenticateJWT, EventController.updateEvent);

// Route pour supprimer un événement
/**
 * @swagger
 * /api/event/{id}:
 *   delete:
 *     summary: Supprimer un événement par ID
 *     description: Supprime un événement spécifique en fonction de l'ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: L'ID de l'événement à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Événement supprimé avec succès
 *       404:
 *         description: Événement non trouvé
 */
router.delete('/:id',authenticateJWT,EventController.deleteEvent);

module.exports = router;
