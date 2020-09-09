const { Router } = require("express");
const Caretaker = require("../models").user;
const Pets = require("../models").pet;

const router = new Router();

router.get("/", async (req, res) => {
  const caretakers = await Caretaker.findAll();
  res.status(200).send({ message: "ok", caretakers });
});

router.get("/mypets", async (req, res) => {
  const mypets = await Pets.findbyPK();
  res.status(200).send({ message: "ok, pets" });
});

module.exports = router;
