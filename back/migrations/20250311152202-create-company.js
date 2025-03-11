module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Companies', {
      accountId: {
        type: Sequelize.UUID,
        primaryKey: true,
        references: {
          model: 'Accounts',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      adresse: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      siret: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      webSite: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Companies');
  },
};
