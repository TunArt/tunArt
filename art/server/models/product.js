module.exports = (sequelize, DataTypes) => {
      const product = sequelize.define("products", {
        name: {type:DataTypes.STRING},
        description: {type:DataTypes.STRING},
        rating: {type:DataTypes.INTEGER},
        comments: {type:DataTypes.STRING},
        price: {type:DataTypes.INTEGER},
        quantity: {type:DataTypes.INTEGER},
        brand: {type:DataTypes.STRING},
        picture: {type:DataTypes.JSON} 
          }  ,{timestamps:true});
          return product;
        };