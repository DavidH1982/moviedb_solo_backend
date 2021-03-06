const { Sequelize } = require("sequelize");

let connection;

if (process.env.NODE_ENV === "PRODUCTION") {
  connection = new Sequelize(`${process.env.DATABASE_URL}?sslmode=no-verify`, {
    url: process.env.DATABASE_URI,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  });
} else {
  connection = new Sequelize(process.env.DB_URI);
}

module.exports = connection;
