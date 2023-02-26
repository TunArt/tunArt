// Define and export the sequelize model that represents the table users.

module.exports = (sequelize, DataTypes) => {
  
    const User = sequelize.define("users", {
        userName:{
            type:DataTypes.STRING},
        email:{
            type:DataTypes.STRING ,
            unique:true },
        password:{
            type:DataTypes.STRING},
        birthDate:{
            type:DataTypes.DATE},
        phoneNumber:{
            type:DataTypes.INTEGER,
            unique:true },
        picture: {
            type: DataTypes.STRING,
            defaultValue : "https://moneysprite.com/sites/default/files/2022-03/Moneysprite-Avatar-male_11.png"
              }
    },{timestamps:true});

    return User;
  };
