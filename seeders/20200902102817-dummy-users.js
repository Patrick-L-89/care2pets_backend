"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

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
          password: bcrypt.hashSync("petra123", SALT_ROUNDS),
          streetName: "Kanaalweg Westzijde",
          city: "Hellevoetsluis",
          houseNumber: 15,
          animalsits: 5,
          description: "just a girl who loves parrots",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Ladies_pirate_costume_design_in_Womens_Pirate_Costumes.jpg/450px-Ladies_pirate_costume_design_in_Womens_Pirate_Costumes.jpg",
          animalTypesInterested: "birds",
          isCaretaker: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "birdfan58",
          fullName: "frank Instein",
          email: "frank@birdfan.com",
          password: bcrypt.hashSync("frAnk", SALT_ROUNDS),
          streetName: "Willem Buytewechstraat",
          city: "Rotterdam",
          houseNumber: 209,
          animalsits: 2,
          description: "I love everything about birds",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/5/54/50centphoto.jpg",
          animalTypesInterested: "birds",
          isCaretaker: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "l1zardude",
          fullName: "Croc Odile",
          email: "a@a",
          password: bcrypt.hashSync("b", SALT_ROUNDS),
          streetName: "Blijdorpweg",
          city: "Rotterdam",
          houseNumber: 22,
          animalsits: 5,
          description: "I love everything about lizards",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg",
          animalTypesInterested: "lizards",
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
