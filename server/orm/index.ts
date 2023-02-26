const {Sequelize , DataTypes} = require ("sequelize");
const config = require('../config/default.ts');

//Created a Sequelize instance and passed the appropriate parameters separately,
//database, user and password fields coming from the config files.
const sequelize = new Sequelize(config.DATABASE, config.USER,config.PASSWORD, {
    HOST: config.HOST,
    dialect: config.dielect
  });

//Create and export a db object which holds the sequelize models,
//with the respective associations.
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./users.model')(sequelize,DataTypes) //require the user model
db.Product = require('./products.model')(sequelize,DataTypes)//require the product model
db.Artist = require('./artists.model')(sequelize,DataTypes)//require the artist model
db.Category = require('./categories.model')(sequelize,DataTypes) //require the category model
db.Bid = require('./bids.model')(sequelize,DataTypes) //require the bid model
db.ArtWork = require('./artWork.model')(sequelize,DataTypes) //require the artWork model
db.Event = require('./events.model')(sequelize,DataTypes) //require the event model
db.Payment = require('./payment.model')(sequelize,DataTypes) //require the payment model


// 1  to many relationships : 

db.Artist.hasMany(db.ArtWork,{
    foreignKey: 'artistId'
})
db.ArtWork.belongsTo(db.Artist,{
    as:"artists",
    foreignKey: 'artistId',
    onDelete:"CASCADE"
});

db.Category.hasMany(db.ArtWork,{
    foreignKey: 'categoryId'
})
db.ArtWork.belongsTo(db.Category,{
    as:"categories",
    foreignKey: 'categoryId',
    onDelete:"CASCADE"
});

db.Bid.hasMany(db.ArtWork,{
    foreignKey: 'bidId'
})
db.ArtWork.belongsTo(db.Bid,{
    as:"bids",
    foreignKey: 'bidId',
    onDelete:"CASCADE"
});

db.User.hasMany(db.Payment,{
    foreignKey: 'userId'
})
db.Payment.belongs(db.User,{
    as:"users",
    foreignKey: 'userId',
    onDelete:"CASCADE"
});

// many to many relationship  user  product

db.User.belongsToMany(db.Bid,{through:"User_Bid"})
db.Bid.belongsToMany(db.User,{through:"User_Bid"})

db.User.belongsToMany(db.ArtWork,{through:"User_ArtWork"})
db.ArtWork.belongsToMany(db.User,{through:"User_ArtWork"})

db.User.belongsToMany(db.Event,{through:"User_Event"})
db.Event.belongsToMany(db.User,{through:"User_Event"})

db.User.belongsToMany(db.Product,{through:"User_Product"})
db.Product.belongsToMany(db.User,{through:"User_Product"})


db.sequelize.sync()
  .then(() => {
        console.log("Database has been successfully synchronized");
    })
    .catch((err) => {
        console.log(err);
    });
    
db.User.sync()
db.Artist.sync()
db.Category.sync()
db.Bid.sync()
db.ArtWork.sync()
db.Event.sync()
db.Product.sync()
db.Payment.sync()

sequelize.authenticate()
.then(()=>{console.log('Successfully authenticated')})
.catch((err) => {console.log(err)})

module.exports = db;
