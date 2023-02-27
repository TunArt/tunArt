module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define("products", {
       name:{
        type: DataTypes.STRING,
       },
       description:{
        type: DataTypes.STRING,
       },
       rating:{
        type: DataTypes.INTEGER,
       },
       comments:{
        type: DataTypes.STRING,
       },
       price:{
        type: DataTypes.INTEGER,
       },
       quantity:{
        type: DataTypes.INTEGER,
       },
       brand:{
        type: DataTypes.STRING,
       },
       Picture:{
      type: DataTypes.JSON,
       }
  
    },{timestamps:true});
  
    return Product;
  }