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
      user.hasMany(models.animal_sit);
    }
  }
  user.init(
    {
      userName: DataTypes.STRING,
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      streetName: DataTypes.STRING,
      city: DataTypes.STRING,
      houseNumber: DataTypes.INTEGER,
      animalsits: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
      animalTypesInterested: DataTypes.STRING,
      isCaretaker: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
