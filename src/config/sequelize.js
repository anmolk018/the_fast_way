const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
