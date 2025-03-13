const Reservation = require('../models/reservation.js');

const ReservationController = {
    // Récupérer tous les événements
    async getAllReservation(req, res) {
      try {
        const reservations = await Reservation.findAll(); 
        res.status(200).json(reservations);
      } catch (error) {
        console.error("Erreur lors de la récupération des événements :", error);
        res.status(500).json({ error: "Une erreur est survenue lors de la récupération des événements." });
      }
    },

    async createReservation(req, res) {
        try {
          const { userId, eventId } = req.body;
          const newReservation = await Reservation.create({
            userId : userId,
            eventId : eventId
          }) 
          res.status(201).json({ message: " Réservation créer avec succès !", event: newReservation });
    
        } catch (error) {
          console.error("Erreur lors de la création de l'événement :", error);
          res.status(500).json({ error: "Une erreur est survenue lors de la création de l'événement." });
        }
      },


}

module.exports = ReservationController;