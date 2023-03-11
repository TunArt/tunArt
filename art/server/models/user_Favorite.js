// it's a join table for many-to-many association between user and product .

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userFavorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  
  userFavorite.init({
    userId:DataTypes.INTEGER,
    artWorkId:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'userFavorite',
  });
  return userFavorite;
};