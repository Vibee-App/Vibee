const path = require('path');
const { Event } = require(path.join(__dirname, '../models'));


exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

exports.createEvent = async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ error: 'Erreur de création' });
  }
};

exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) return res.status(404).json({ error: 'Événement non trouvé' });
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) return res.status(404).json({ error: 'Événement non trouvé' });

    await event.update(req.body);
    res.json(event);
  } catch (error) {
    res.status(400).json({ error: 'Erreur de mise à jour' });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) return res.status(404).json({ error: 'Événement non trouvé' });

    await event.destroy();
    res.json({ message: 'Événement supprimé' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

