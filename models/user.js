"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.pet);
    }
  }
  user.init(
    {
      userName: DataTypes.STRING,
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      streetname: DataTypes.STRING,
      city: DataTypes.STRING,
      housenumber: DataTypes.INTEGER,
      postcode: DataTypes.STRING,
      animalsits: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
      animal_types_interested: DataTypes.STRING,
      show_Caretaker: DataTypes.BOOLEAN,
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
