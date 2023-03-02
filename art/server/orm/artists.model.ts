module.exports = (sequelize, DataTypes) => {

    const Artist = sequelize.define("artists", {
      fullName: {
        type: DataTypes.STRING
    },
      bio: {
        type: DataTypes.STRING,
      }, 
      email: {
        type: DataTypes.STRING,
        unique: true,
      }, 
      password: {
       type: DataTypes.STRING,
     },
       picture: {
        type: DataTypes.STRING,
                defaultValue : "https://moneysprite.com/sites/default/files/2022-03/Moneysprite-Avatar-male_11.png"
      }, 
       phoneNumber: {
        type: DataTypes.INTEGER,
                unique: true,
      }, 
  
    },{timestamps:true});
  
    return Artist;
  }
  
  export {};
