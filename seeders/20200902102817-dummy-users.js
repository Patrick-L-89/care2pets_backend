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
          userName: "birdfan50",
          fullName: "frank Instein",
          email: "frank@birdfan.com",
          password: bcrypt.hashSync("frAnk", SALT_ROUNDS),
          streetName: "Willem Buytewechstraat",
          city: "Rotterdam",
          houseNumber: 209,
          animalsits: 2,
          description: "I'll take you to the pet shop...",
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
          description: "In a way, lizards rule the world",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg",
          animalTypesInterested: "otherReptiles",
          isCaretaker: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "QueenBee",
          fullName: "Bee Once",
          email: "bug@bee.com",
          password: bcrypt.hashSync("bee", SALT_ROUNDS),
          streetName: "wegweg",
          city: "Utrecht",
          houseNumber: 2,
          animalsits: 8,
          description: "Who runs the world? Girls!",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/c/c3/Beyonce_Brussels_14.jpg",
          animalTypesInterested: "bugs",
          isCaretaker: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "Ana Conda",
          fullName: "Nicky 5",
          email: "ana@snake",
          password: bcrypt.hashSync("Anaconda", SALT_ROUNDS),
          streetName: "straatlaan",
          city: "Oudenhoorn",
          houseNumber: 59,
          animalsits: 1,
          description:
            "My anaconda don't, my anaconda don't. My anaconda don't want none unless you got buns, hun",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/d/d1/Nicki_Minaj_interview_2012.jpg",
          animalTypesInterested: "snakes",
          isCaretaker: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "BestNinja4ever",
          fullName: "Dona Tello",
          email: "donatello@ninja",
          password: bcrypt.hashSync("Pizza", SALT_ROUNDS),
          streetName: "Downtown",
          city: "New York",
          houseNumber: 14,
          animalsits: 5,
          description: "Teenage mutant Ninja Turtles!!!",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/8/80/MCCC_15_-_Teenage_Mutant_Ninja_Turtles_%2817471903414%29.jpg",
          animalTypesInterested: "turtles",
          isCaretaker: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "EyeoftheTiger",
          fullName: "Rocky Bulb",
          email: "Rocky@boxer",
          password: bcrypt.hashSync("song", SALT_ROUNDS),
          streetName: "placestreet",
          city: "London",
          houseNumber: 21,
          animalsits: 2,
          description: "I have the eye of the tiger",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/d/d6/Sylvester_Stallone_2014_avp_2.jpg",
          animalTypesInterested: "mammals",
          isCaretaker: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "AquaDude",
          fullName: "super hero",
          email: "best@superhero",
          password: bcrypt.hashSync("Dolphins", SALT_ROUNDS),
          streetName: "fishLane",
          city: "Manhatten",
          houseNumber: 69,
          animalsits: 8,
          description: "MARTHA!!!!",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/b/bb/Jason_Momoa_Aquaman%2C_Sydney%2C_Australia%2C_19th_Dec%2C_2018_%2831439335187%29_%28cropped%29.jpg",
          animalTypesInterested: "fish",
          isCaretaker: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "The trainer",
          fullName: "Animal Guy",
          email: "good@comback",
          password: bcrypt.hashSync("Blue", SALT_ROUNDS),
          streetName: "Straatlaan",
          city: "Amsterdam",
          houseNumber: 592,
          animalsits: 4,
          description: "clever girl",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/4/47/Jurassic_World_Fallen_Kingdom_Japan_Premiere_Red_Carpet_Chris_Pratt_%2828232947187%29.jpg",
          animalTypesInterested: "otherAnimals",
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
