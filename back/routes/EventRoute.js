const express = require('express');
const EventController = require('../controllers/EventController');

const router = express.Router();

router.get('/events', EventController.getAllEvents);  
router.get('/events/:id', EventController.getEventById);  
router.post('/events', EventController.createEvent); 
router.put('/events/:id', EventController.updateEvent);  
router.delete('/events/:id', EventController.deleteEvent);  

module.exports = router;
