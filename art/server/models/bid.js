module.exports = (sequelize, DataTypes) => {
  
  const bid = sequelize.define("bids", {
    currentBidder:{type:DataTypes.INTEGER},
    currentPrice: {type:DataTypes.INTEGER},
    artWorkId: {type:DataTypes.INTEGER},
      }  ,{timestamps:true});
      return bid;
    };
