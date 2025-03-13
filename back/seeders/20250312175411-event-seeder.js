'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Events', [
      {
        id: 'e1665b64-4e43-43c8-914a-14c67ecd1ce2',
        IdCreateur: 'b3b9c3a2-5d76-4b68-bc16-7d9a042178e5',
        DateDebut: '2025-06-15T09:00:00.000Z',
        DateFin: '2025-06-16T18:00:00.000Z',
        Lieu: 'Paris',
        Adresse: '12 rue de la Paix',
        Tags: 'Tech,Innovation',
        Tarif: 150,
        Description: "Conférence sur l'innovation technologique",
        Image: 'image.jpg',
        Nom: 'Tech Conference 2025',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'a23bc5de-8f3c-4a2b-92d3-78bffdbbaf97',
        IdCreateur: 'c5d6a3f1-2e7b-4b0a-9a6f-3a5b9f3c0d5e',
        DateDebut: '2025-07-10T10:00:00.000Z',
        DateFin: '2025-07-12T17:00:00.000Z',
        Lieu: 'Lyon',
        Adresse: '25 Avenue des Champs',
        Tags: 'AI,Startups',
        Tarif: 200,
        Description: "Sommet sur l'intelligence artificielle",
        Image: 'ai_summit.jpg',
        Nom: 'AI Summit 2025',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'd5566f47-99b2-4e69-8a3e-19d56a78b3c1',
        IdCreateur: '8f4a9e2b-1c6d-4e3b-b5a7-1c2d9f7e4a5b',
        DateDebut: '2025-09-20T08:30:00.000Z',
        DateFin: '2025-09-22T16:30:00.000Z',
        Lieu: 'Marseille',
        Adresse: '10 Rue du Vieux-Port',
        Tags: 'Business,Networking',
        Tarif: 300,
        Description: "Conférence sur les tendances du business",
        Image: 'business_trends.jpg',
        Nom: 'Business Trends 2025',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Events', null, {});
  }
};
