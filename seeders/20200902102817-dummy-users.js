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
          streetname: "Kanaalweg Westzijde",
          city: "Hellevoetsluis",
          housenumber: 15,
          postcode: "3221 LK",
          animalsits: 5,
          description: "just a girl who loves parrots",
          image:
            "https://briansmith.com/wp-content/uploads/2012/02/Brian-Smith-Anne-Hathaway.jpg",
          animal_types_interested: "birds",
          show_Caretaker: true,
          latitude: 15,
          longitude: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "birdfan58",
          fullName: "frank Instein",
          email: "frank@birdfan.com",
          password: "frAnk",
          streetname: "Willem Buytewechstraat",
          city: "Rotterdam",
          housenumber: 209,
          postcode: "3024 XK",
          animalsits: 2,
          description: "I love everything about birds",
          image:
            "https://briansmith.com/wp-content/uploads/2012/02/Brian-Smith-Samuel-L-Jackson.jpg",
          animal_types_interested: "birds",
          show_Caretaker: true,
          latitude: 14,
          longitude: 19,
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
