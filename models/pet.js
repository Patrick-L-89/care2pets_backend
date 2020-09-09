"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pet.belongsTo(models.user);
    }
  }
  pet.init(
    {
      petName: DataTypes.STRING,
      species: DataTypes.STRING,
      pet_description: DataTypes.TEXT,
      animal_type: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "pet",
    }
  );
  return pet;
};
