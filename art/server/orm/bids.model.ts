module.exports = (sequelize, DataTypes) => {

    const Bid = sequelize.define("bids", {

startDate:{
    type: DataTypes.DATE,
},
endDate:{
    type: DataTypes.DATE,
},
currenPrice:{
    type: DataTypes.INTEGER,
},
minPrice:{
    type: DataTypes.INTEGER,
},
currentBibber:{
    type: DataTypes.STRING,
},
artWorkId:{
    type: DataTypes.INTEGER,
    foreignKey: true,
},
artWortArtistId:{
    type: DataTypes.INTEGER,
    foreignKey: true,
},
artWorkCategoryId:{
    type: DataTypes.INTEGER,
    foreignKey: true,
}

 
  
    },{timestamps:true});
  
    return Bid;
  }
  export {};
