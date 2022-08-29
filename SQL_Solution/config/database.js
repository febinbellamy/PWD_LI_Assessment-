const Sequelize = require("sequelize");

module.exports = new Sequelize("TKHSequelizeChallenge", "postgres", "123456", {
  host: "localhost",
  dialect: "postgres",
});
