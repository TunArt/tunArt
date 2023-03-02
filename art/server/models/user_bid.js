// it's a join table for many-to-many association between user and bid .

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserBid extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  
  UserBid.init({
    userId:DataTypes.INTEGER,
    bidId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserBid',
  });
  return UserBid;
};