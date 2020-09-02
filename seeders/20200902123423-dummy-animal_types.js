"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "animal_types",
      [
        {
          animal_Type: "bird",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_Type: "turtle",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animal_Type: "snake",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("animal_types", null, {});
  },
};
