"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class animal_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      animal_type.hasMany(models.animal_sit);
    }
  }
  animal_type.init(
    {
      animal_Type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "animal_type",
    }
  );
  return animal_type;
};
