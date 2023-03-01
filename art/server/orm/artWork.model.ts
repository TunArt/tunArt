// Define and export the sequelize model that represents the table artWorks.

module.exports = (sequelize, DataTypes) => {
  
    const ArtWork = sequelize.define("artWorks", {
        name:{
            type:DataTypes.STRING },
        creationDate:{
            type:DataTypes.DATE },
        price:{
            type:DataTypes.INTEGER },
        ratings:{
            type:DataTypes.INTEGER,},
        description:{
            type:DataTypes.STRING},
        auction :{
             type:DataTypes.BOOLEAN,
        },
        picture: {
            type: DataTypes.STRING,
              },
        artistId: {
            type: DataTypes.INTEGER,
        },
        categoryId: {
            type: DataTypes.INTEGER,
        },
        bidId:{
            type: DataTypes.INTEGER,
        }
    },{timestamps:true});
    
    return ArtWork;
  };
  export {};