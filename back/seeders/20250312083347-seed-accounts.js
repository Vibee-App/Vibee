'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('Accounts', [
      {
        id: '550e8400-e29b-41d4-a716-446655440000', // UUID fixe (modifiable)
        email: 'user1@example.com',
        password: await bcrypt.hash('password123', 10), // Hash du mot de passe
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440001',
        email: 'user2@example.com',
        password: await bcrypt.hash('password456', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('Accounts', null, {});
  }
};
