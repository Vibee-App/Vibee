'use strict';

const { Event } = require('../models/event.js'); // Import du modèle Event

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await Event.bulkCreate([
        new Event({
          id: 1,
          datedebut: new Date('2024-06-01T10:00:00.000Z'),
          dateFin: new Date('2024-06-01T18:00:00.000Z'),
          lieu: "Paris",
          adresse: "10 Rue de la Paix",
          tags: "Tech, Conférence",
          tarif: 50,
          description: "Un grand événement sur la technologie.",
          image: "event1.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        }),
        new Event({
          id: 2,
          datedebut: new Date('2024-07-15T14:00:00.000Z'),
          dateFin: new Date('2024-07-15T22:00:00.000Z'),
          lieu: "Lyon",
          adresse: "5 Avenue des Champs",
          tags: "Musique, Festival",
          tarif: 30,
          description: "Un festival de musique en plein air.",
          image: "event2.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        }),
        new Event({
          id: 3,
          datedebut: new Date('2024-08-10T09:00:00.000Z'),
          dateFin: new Date('2024-08-10T17:00:00.000Z'),
          lieu: "Marseille",
          adresse: "20 Quai des Belges",
          tags: "Sport, Compétition",
          tarif: 40,
          description: "Un tournoi sportif international.",
          image: "event3.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        })
      ]);
      console.log("✅ Seeders exécutés avec succès !");
    } catch (error) {
      console.error("❌ Erreur lors de l'insertion des seeders :", error);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Events', null, {});
  }
};
