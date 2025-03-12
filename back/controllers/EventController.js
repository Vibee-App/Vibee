const Event = require('../models/event');

const EventController = {
  // Méthode pour récupérer tous les événements
  async getAllEvents(req, res) {
    try {
      const events = await Event.findAll(); // Récupérer tous les événements
      res.status(200).json(events);
    } catch (error) {
      console.error("Erreur lors de la récupération des événements :", error);
      res.status(500).json({ error: "Une erreur est survenue lors de la récupération des événements." });
    }
  },
async createEvent(req, res) {
    try {
      const { datedebut, dateFin, lieu, adresse, tags, tarif, description, image } = req.body;

      // Vérification des champs requis
      if (!datedebut || !dateFin || !lieu || !adresse || !tarif) {
        return res.status(400).json({ error: "Tous les champs requis doivent être remplis !" });
      }

      // Création de l'événement avec `new Event()`
      const newEvent = new Event({
        datedebut: new Date(datedebut),
        dateFin: new Date(dateFin),
        lieu,
        adresse,
        tags,
        tarif,
        description,
        image
      });

      // Sauvegarde en base
      await newEvent.save();
      res.status(201).json({ message: "Événement créé avec succès !", event: newEvent });
    } catch (error) {
      console.error(" Erreur lors de la création de l'événement :", error);
      res.status(500).json({ error: "Une erreur est survenue lors de la création de l'événement." });
    }
  }
};



module.exports = EventController;
