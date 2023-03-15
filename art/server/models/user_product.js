// it's a join table for many-to-many association between user and product .

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  
  UserProduct.init({
    userId:DataTypes.INTEGER,
    productId:DataTypes.INTEGER,
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    quantityBought: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    state:{
      type:DataTypes.STRING,
      defaultValue:'pending'
    }
  }, {
    sequelize,
    modelName: 'UserProduct',
  });
  return UserProduct;
};