// defines Sequelize model for the "song" table and imports Sequalize classes: Model and and Datatypes.
// imports Sequalize class instance from connection.js for database connection to enable this module to 
// define the model and associate it with the database connection.

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// create instance of Model
class Song extends Model { }

// initialize column definitions
Song.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    song_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    song_path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    artist_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    release_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  // define Sequalize model configuration options
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'song',
  }
);
// export initialized Sequelize model instance
module.exports = Song;