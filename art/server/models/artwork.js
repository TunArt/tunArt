'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArtWork extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ArtWork.belongsTo(models.Artist, {
        foreignKey: "artistId"
      })
      ArtWork.belongsTo(models.Category, {
        foreignKey: "categoryId"
      })
      ArtWork.belongsToMany(models.User, { through: 'user_artwork',foreignKey: 'artworkId' });
    }
  }
  ArtWork.init({
    name: DataTypes.STRING,
    creationDate: DataTypes.DATE,
    price: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    description: DataTypes.STRING,
    auction: DataTypes.TINYINT,
    image: DataTypes.STRING,
    artistId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ArtWork',
  });
  return ArtWork;
};