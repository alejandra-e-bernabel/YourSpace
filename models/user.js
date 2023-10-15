const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8], // Minimum password length
      },
    },
    registration_date: {
      type: DataTypes.DATE,
      allowNull: false,
    }






  },
  {
    sequelize, // This should be sequelize, not a separate object
    timestamps: false, // Disable timestamps
    freezeTableName: true,
    underscored: true,
    modelName: 'user', // Set the model name to 'user'
  }
);

module.exports = User;