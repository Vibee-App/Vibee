const Event = require('../models/event.js');

const EventController = {
  // Récupérer tous les événements
  async getAllEvents(req, res) {
    try {
      const events = await Event.findAll(); 
      res.status(200).json(events);
    } catch (error) {
      console.error("Erreur lors de la récupération des événements :", error);
      res.status(500).json({ error: "Une erreur est survenue lors de la récupération des événements." });
    }
  },

  // Récupérer un événement par ID
  async getEventById(req, res) {
    try {
      const { id } = req.params;
      const event = await Event.findByPk(id);

      if (!event) {
        return res.status(404).json({ error: "Événement non trouvé." });
      }

      res.status(200).json(event);
    } catch (error) {
      console.error("Erreur lors de la récupération de l'événement :", error);
      res.status(500).json({ error: "Une erreur est survenue lors de la récupération de l'événement." });
    }
  },

  // Créer un événement
  async createEvent(req, res) {
    try {
      const { idCreateur, DateDebut, DateFin, Lieu, Adresse, Tags, Tarif, Description, Images, Nom } = req.body;

      console.log('Données reçues :', { idCreateur, DateDebut, DateFin, Lieu, Adresse, Tags, Tarif, Description, Images, Nom });

      const newEvent = await Event.create({
        idCreateur,
        DateDebut: new Date(DateDebut),
        DateFin: new Date(DateFin),
        Lieu,
        Adresse,
        Tags,
        Tarif,
        Description,
        Image: Images, // Vérifier la cohérence du champ
        Nom
      });

      console.log('Événement créé :', newEvent);
      res.status(201).json({ message: "Événement créé avec succès !", event: newEvent });

    } catch (error) {
      console.error("Erreur lors de la création de l'événement :", error);
      res.status(500).json({ error: "Une erreur est survenue lors de la création de l'événement." });
    }
  },

  // Mettre à jour un événement
  async updateEvent(req, res) {
    try {
      const { id } = req.params;
      const { idCreateur, DateDebut, DateFin, Lieu, Adresse, Tags, Tarif, Description, Images, Nom } = req.body;

      const event = await Event.findByPk(id);
      if (!event) {
        return res.status(404).json({ error: "Événement non trouvé." });
      }

      await event.update({
        idCreateur,
        DateDebut: new Date(DateDebut),
        DateFin: new Date(DateFin),
        Lieu,
        Adresse,
        Tags,
        Tarif,
        Description,
        Image: Images, 
        Nom
      });

      res.status(200).json({ message: "Événement mis à jour avec succès !", event });

    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'événement :", error);
      res.status(500).json({ error: "Une erreur est survenue lors de la mise à jour de l'événement." });
    }
  },

  // Supprimer un événement
  async deleteEvent(req, res) {
    try {
      const { id } = req.params;

      const event = await Event.findByPk(id);
      if (!event) {
        return res.status(404).json({ error: "Événement non trouvé." });
      }

      await event.destroy();
      res.status(200).json({ message: "Événement supprimé avec succès !" });

    } catch (error) {
      console.error("Erreur lors de la suppression de l'événement :", error);
      res.status(500).json({ error: "Une erreur est survenue lors de la suppression de l'événement." });
    }
  }
};

module.exports = EventController;
