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
      Event.belongsToMany(models.User, { through: 'user_event',foreignKey: 'eventId' });
    }
  }
  Event.init({
    eventName: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image:DataTypes.STRING,
    eventDate: DataTypes.STRING,
    evenetTime: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};