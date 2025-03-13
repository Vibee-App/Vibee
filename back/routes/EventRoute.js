const express = require('express');
const EventController = require('../controllers/EventController');

const router = express.Router();

router.get('/', EventController.getAllEvents);  
router.get('/:id', EventController.getEventById);  
router.post('/', EventController.createEvent); 
router.put('/:id', EventController.updateEvent);  
router.delete('/:id', EventController.deleteEvent);  

module.exports = router;
