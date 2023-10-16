const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Friend extends Model {}

Friend.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    friend_name: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    image_path: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "friends",
  }
);

module.exports = Friend;
