// it's a join table for many-to-many association between user and product .
const { DataTypes } = require('sequelize');

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArtistProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  
  ArtistProduct.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    quantityBought: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    artistId:DataTypes.INTEGER,
    productId:DataTypes.INTEGER,
    state:{
      type:DataTypes.STRING,
      defaultValue:'pending'
    }
    }, {
    sequelize,
    modelName: 'ArtistProduct',
  });
  return ArtistProduct;
};