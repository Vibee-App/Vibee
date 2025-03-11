'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      // Associations si besoin
    }
  }

  Event.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lieu: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      idCreateur: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tag: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tarif: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Event',
      tableName: 'Events',
      timestamps: true,
    }
  );

  return Event;
};
