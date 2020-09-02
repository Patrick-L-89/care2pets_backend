"use strict";

const { buildResolveInfo } = require("graphql/execution/execute");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          userName: "parrot Pete",
          fullName: "peter van Graaf",
          email: "peter@loveparrots.com",
          password: "peter123",
          streetname: "Kanaalweg Westzijde",
          city: "Hellevoetsluis",
          housenumber: 15,
          postcode: "3221 LK",
          animalsits: 5,
          description: "just a guy who loves parrots",
          image: "www.testimage.com",
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
          image: "www.franksimage.com",
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
