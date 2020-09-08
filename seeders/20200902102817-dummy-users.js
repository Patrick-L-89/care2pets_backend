"use strict";

const { buildResolveInfo } = require("graphql/execution/execute");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          userName: "parrot Petra",
          fullName: "petra van Graaf",
          email: "petra@loveparrots.com",
          password: "petra123",
          streetName: "Kanaalweg Westzijde",
          city: "Hellevoetsluis",
          houseNumber: 15,
          animalsits: 5,
          description: "just a girl who loves parrots",
          image:
            "https://briansmith.com/wp-content/uploads/2012/02/Brian-Smith-Anne-Hathaway.jpg",
          animalTypesInterested: "birds",
          isCaretaker: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "birdfan58",
          fullName: "frank Instein",
          email: "frank@birdfan.com",
          password: "frAnk",
          streetName: "Willem Buytewechstraat",
          city: "Rotterdam",
          houseNumber: 209,
          animalsits: 2,
          description: "I love everything about birds",
          image:
            "https://briansmith.com/wp-content/uploads/2012/02/Brian-Smith-Samuel-L-Jackson.jpg",
          animalTypesInterested: "birds",
          isCaretaker: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
