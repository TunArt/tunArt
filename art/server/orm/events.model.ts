// Define and export the sequelize model that represents the table events.

module.exports = (sequelize, DataTypes) => {
  
    const Event = sequelize.define("events", {
        eventName:{
            type:DataTypes.STRING },
        description:{
            type:DataTypes.STRING},
        price:{
            type:DataTypes.INTEGER },
        eventDate :{
             type:DataTypes.DATE,
        },
        eventTime: {
            type: DataTypes.STRING,
              },
    },{timestamps:true});
    
    return Event;
  };
  export {};