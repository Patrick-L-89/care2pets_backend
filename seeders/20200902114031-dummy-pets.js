"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "pets",
      [
        {
          name: "yarr",
          species: "grey parrot",
          pet_description: "I'm a jolly grey parrot",
          animal_type: "bird",
          image: "www.jollyparrot.com",
          user_Id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Parry",
          species: "black-headed parrot",
          pet_description: "I'm a very happy little bird",
          animal_type: "bird",
          image: "www.happybird.com",
          user_Id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("pets", null, {});
  },
};
