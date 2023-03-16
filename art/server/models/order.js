module.exports = (sequelize, DataTypes) => {
    const order = sequelize.define("order", {
      prix: { type: DataTypes.STRING },
      state: { type: DataTypes.STRING, defaultValue: "pending" }, // add defaultValue option
      paymentId: { type: DataTypes.STRING },
      productId: { type: DataTypes.STRING }
    }, { timestamps: true });
    
    return order;
  };
  