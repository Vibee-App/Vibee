const express = require('express');
const EventController = require('../controllers/EventController');

const router = express.Router();

// Route pour récupérer tous les événements
router.get('/events', EventController.getAllEvents);
router.post('/events', EventController.createEvent);


module.exports = router;
