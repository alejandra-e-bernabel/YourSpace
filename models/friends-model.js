const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class People extends Model {}

People.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "people",
  }
);

module.exports = People;
