// Define and export the sequelize model that represents the table payment.

module.exports = (sequelize, DataTypes) => {
  
    const Payment = sequelize.define("payments", {
        paymentType:{
            type:DataTypes.STRING},
        serviceProvider:{
            type:DataTypes.STRING },
        accountNo:{
            type:DataTypes.INTEGER},
        expireDate:{
            type:DataTypes.DATE},
        userId:{
            type:DataTypes.INTEGER,
            foreignKey:true},
        artistId:{
            type:DataTypes.INTEGER,
            foreignKey:true
        }
    },{timestamps:true});

    return Payment;
  };