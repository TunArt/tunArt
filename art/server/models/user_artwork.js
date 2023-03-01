// it's a join table for many-to-many association between user and artwork .

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserArtwork extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  
  UserArtwork.init({
    userId:DataTypes.INTEGER,
    artworkId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserArtwork',
  });
  return UserArtwork;
};