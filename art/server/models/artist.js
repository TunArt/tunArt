    module.exports = (sequelize, DataTypes) => {

      const artist = sequelize.define("artists", {
        name: {type:DataTypes.STRING},
        bio: {type:DataTypes.STRING},
        email: {type:DataTypes.STRING},
        password: {type:DataTypes.STRING},
        picture: {type:DataTypes.STRING},
        phoneNumber: {type:DataTypes.INTEGER}
      }  ,{timestamps:true});
      return artist;
    };