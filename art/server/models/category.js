module.exports = (sequelize, DataTypes) => {

  const category = sequelize.define("categories", {
    name: {type:DataTypes.STRING},
      }  ,{timestamps:true});
      return category;
    };