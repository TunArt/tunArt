module.exports = (sequelize, DataTypes) => {

  const artwork = sequelize.define("artworks", {
    name: {type:DataTypes.STRING},
    creationDate: {type:DataTypes.DATE},
    price: {type:DataTypes.INTEGER},
    rating: {type:DataTypes.INTEGER},
    description: {type:DataTypes.STRING},
    auction: {type:DataTypes.TINYINT},
    image: {type:DataTypes.STRING},
    verified: {type:DataTypes.BOOLEAN , defaultValue:false},
    artistId: {type:DataTypes.INTEGER},
    categoryId: {type:DataTypes.INTEGER},  
    userId: {type:DataTypes.INTEGER}
      }  ,{timestamps:true});
      return artwork;
    };