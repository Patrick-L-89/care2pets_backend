"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "pets",
      [
        {
          petName: "yarr",
          species: "grey parrot",
          pet_description: "I'm a jolly grey parrot",
          animal_type: "bird",
          image: "www.jollyparrot.com",
          user_Id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          petName: "Parry",
          species: "black-headed parrot",
          pet_description: "I'm a very happy little bird",
          animal_type: "bird",
          image: "www.happybird.com",
          user_Id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          petName: "Michelle",
          species: "Leopard Gecko",
          pet_description: "Bugs are the best, for eating",
          animal_type: "lizard",
          image: "www.lizzylizzard.com",
          user_Id: 3,
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
