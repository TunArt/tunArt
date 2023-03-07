module.exports = (sequelize, DataTypes) => {

    const message = sequelize.define("messages", {
      content: {type:DataTypes.STRING},
      // bidId:{type:DataTypes.INTEGER},
      picture:{type:DataTypes.STRING},
      name:{type:DataTypes.STRING},
      artworkId:{type:DataTypes.INTEGER}

        }  ,{timestamps:true});
        return message;
      };