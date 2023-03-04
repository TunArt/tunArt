module.exports = (sequelize, DataTypes) => {

  const payment = sequelize.define("payments", {
    paymentType: {type:DataTypes.STRING},
    serviceProvider: {type:DataTypes.STRING},
    accountNo: {type:DataTypes.INTEGER},
    expireDate: {type:DataTypes.DATE},
    userId: {type:DataTypes.INTEGER},
    artistId: {type:DataTypes.INTEGER},  
      }  ,{timestamps:true});
      return payment;
    };