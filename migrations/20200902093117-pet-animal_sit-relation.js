"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("animal_sits", "pet_Id", {
      type: Sequelize.INTEGER,
      references: {
        model: "pets",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("animal_sits", "pet_Id");
  },
};
