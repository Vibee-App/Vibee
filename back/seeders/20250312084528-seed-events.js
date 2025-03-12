'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Events', [
      {
        nom: "Tech Conference 2025",
        idCreateur: 1,
        type: "Conférence",
        dateDebut: new Date("2025-06-15T09:00:00"),
        dateFin: new Date("2025-06-16T18:00:00"),
        lieu: "Paris",
        adresse: "12 rue de la Paix",
        tags: "Tech,Innovation,AI",
        tarif: 150.00,
        description: "Une conférence sur les nouvelles technologies et l'IA.",
        image: "https://example.com/tech-conference.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nom: "Startup Pitch Night",
        idCreateur: 2,
        type: "Networking",
        dateDebut: new Date("2025-07-10T19:00:00"),
        dateFin: new Date("2025-07-10T22:00:00"),
        lieu: "Lyon",
        adresse: "Espace Co-Working, Lyon",
        tags: "Entrepreneuriat,Startup,Networking",
        tarif: 50.00,
        description: "Une soirée pour pitcher son projet et rencontrer des investisseurs.",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nom: "Masterclass Développement Web",
        idCreateur: 3,
        type: "Formation",
        dateDebut: new Date("2025-08-01T10:00:00"),
        dateFin: new Date("2025-08-01T17:00:00"),
        lieu: "Marseille",
        adresse: "Campus Code, Marseille",
        tags: "Web,Programmation,FullStack",
        tarif: 200.00,
        description: "Une journée complète pour apprendre à coder comme un pro.",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Events', null, {});
  }
};
