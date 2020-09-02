"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("animal_sits", "animal_Type", {
      type: Sequelize.INTEGER,
      references: {
        model: "animal_types",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("animal_sits", "animal_Type");
  },
};
