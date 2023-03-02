const sequelize = require("sequelize");
const env = require('dotenv').config()
console.log(process.env.DATABASE);
const Sequelize = new sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: "mysql",
  operationsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

Sequelize.sync();
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.artist = require("./artist.js")(Sequelize, sequelize);
db.user = require("./user.js")(Sequelize, sequelize);
db.category = require("./category.js")(Sequelize, sequelize);
db.bid = require("./bid.js")(Sequelize, sequelize);
db.event = require("./event.js")(Sequelize, sequelize);
db.artwork = require("./artwork.js")(Sequelize, sequelize);
db.payment = require("./payment.js")(Sequelize, sequelize);
db.product = require("./product.js")(Sequelize, sequelize);

//Join tables 
db.user_bid = require("./user_bid.js")(Sequelize, sequelize);
db.user_event = require("./user_event.js")(Sequelize, sequelize);
db.user_product = require("./user_product.js")(Sequelize, sequelize);

//user and bid association (many-to-many)
db.user.belongsToMany(db.bid, { through: 'userbids', foreignKey: 'userId'});
db.bid.belongsToMany(db.user, { through: 'userbids', foreignKey: 'bidId' });

// //user and artwork association (many-to-many)
// db.user.belongsToMany(db.artwork, { through: 'userartworks', foreignKey: 'userId' });
// db.artwork.belongsToMany(db.user, { through: 'userartworks',foreignKey: 'artworkId' });

//user and event association (many-to-many)
db.user.belongsToMany(db.event, { through: 'userevents', foreignKey: 'userId' });
db.event.belongsToMany(db.user, { through: 'userevents',foreignKey: 'eventId' });

//user and product association (many-to-many)
db.user.belongsToMany(db.product, { through: 'userproducts', foreignKey: 'userId' });
db.product.belongsToMany(db.user, { through: 'userproducts', foreignKey: 'productId' });

//artist and artwork association (one-to-many)
db.artwork.belongsTo(db.artist, {
  foreignKey: "artistId"
})
db.artist.hasMany(db.artwork,{
  foreignKey: "artistId"
})

//user and artwork association (one-to-many)
db.artwork.belongsTo(db.user, {
  foreignKey: "userId"
})
db.user.hasMany(db.artwork,{
  foreignKey: "userId"
})


//category and artwork association (one-to-many)
db.artwork.belongsTo(db.category, {
  foreignKey: "categoryId"
})
db.category.hasMany(db.artwork,{
  foreignKey: "categoryId"
})

//user and payment association (one-to-many)
db.payment.belongsTo(db.user ,{
  foreignKey: "userId"
})
db.user.hasMany(db.payment,{
  foreignKey: "userId"
})

module.exports = db;
