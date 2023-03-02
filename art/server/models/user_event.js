// it's a join table for many-to-many association between user and event .

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserEvent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  
  UserEvent.init({
    userId:DataTypes.INTEGER,
    eventId:DataTypes.INTEGER,
    eventDate:{
      type:DataTypes.DATE,
      primaryKey:true
    }
  }, {
    sequelize,
    modelName: 'UserEvent',
  });
  return UserEvent;
};