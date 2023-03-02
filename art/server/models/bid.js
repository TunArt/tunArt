module.exports = (sequelize, DataTypes) => {
  
  const bid = sequelize.define("bids", {
    startDate: {type:DataTypes.DATE},
    endDate: {type:DataTypes.DATE},
    currentPrice: {type:DataTypes.INTEGER},
    minPrice: {type:DataTypes.INTEGER},
    currentBidder: {type:DataTypes.STRING},
    artWorkArtistId: {type:DataTypes.INTEGER},
    artWorkCategoryId: {type:DataTypes.INTEGER},
      }  ,{timestamps:true});
      return bid;
    };
