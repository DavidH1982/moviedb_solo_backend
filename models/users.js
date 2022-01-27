const { Sequelize, DataTypes } = require("sequelize");
const connection = require("../connection");
const hash = require("../hash");

const User = connection.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    passwordHash: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {indexed: [{unique: true, fields: ["name", "email"]}]});

module.exports = User;