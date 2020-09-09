"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class animal_sit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      animal_sit.hasOne(models.animal_type);
    }
  }
  animal_sit.init(
    {
      date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "animal_sit",
    }
  );
  return animal_sit;
};
