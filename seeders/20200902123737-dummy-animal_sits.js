"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "animal_sits",
      [
        {
          date: new Date(),
          user_Id: 2,
          pet_Id: 2,
          animal_Type: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("animal_sits", null, {});
  },
};
