'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event.init({
    nom: DataTypes.STRING,
    idCreateur: DataTypes.INTEGER,
    type: DataTypes.STRING,
    dateDebut: DataTypes.DATE,
    dateFin: DataTypes.DATE,
    lieu: DataTypes.STRING,
    adresse: DataTypes.STRING,
    tags: DataTypes.STRING,
    tarif: DataTypes.FLOAT,
    description: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};