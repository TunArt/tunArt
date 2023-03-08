module.exports = (sequelize, DataTypes) => {

    const message = sequelize.define("messages", {
      content: {type:DataTypes.STRING},
      roomNumber: {type:DataTypes.INTEGER},
      picture:{type:DataTypes.STRING},
      name:{type:DataTypes.STRING},
      artworkId:{type:DataTypes.INTEGER}
      // bidId:{type:DataTypes.INTEGER},

        }  ,{timestamps:true});
        return message;
      };