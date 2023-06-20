const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/sequelize");

const Coingecko = sequelize.define("Coingecko", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  symbol: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  platforms: {
    type: DataTypes.JSON,
    allowNull: true,
  },
});

(async () => {
  await Coingecko.sync()
    .then(() => {
      console.log("Coingecko table created successfully!");
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
})();

module.exports = Coingecko;
