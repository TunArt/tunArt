'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bid extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bid.belongsToMany(models.User, { through: 'user_bid', foreignKey: 'bidId' });
    }
  }
  Bid.init({
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    currentPrice: DataTypes.INTEGER,
    minPrice: DataTypes.INTEGER,
    currentBidder: DataTypes.STRING,
    artWorkId: DataTypes.INTEGER,
    artWorkArtistId: DataTypes.INTEGER,
    artWorkCategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bid',
  });
  return Bid;
};