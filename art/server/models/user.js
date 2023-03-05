module.exports = (sequelize, DataTypes) => {
      const user = sequelize.define("users", {
        userName: {type:DataTypes.STRING},
        email: {type:DataTypes.STRING},
        password: {type:DataTypes.STRING},
        birthDate: {type:DataTypes.STRING},
        role:{type:DataTypes.STRING,defaultValue:"user"},
        phoneNumber: {type:DataTypes.INTEGER},
        picture: {type:DataTypes.STRING}
      }  ,{timestamps:true});
      return user;
    };