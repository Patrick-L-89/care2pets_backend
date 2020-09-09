const { Router } = require("express");
const Caretaker = require("../models").user;
const Pets = require("../models").pet;

const router = new Router();

router.get("/", async (req, res) => {
  const caretakers = await Caretaker.findAll();
  res.status(200).send({ message: "ok", caretakers });
});

router.get("/mypets/:id", async (req, res) => {
  const { id } = req.params;

  console.log("WHAT IS ID?", id);

  const mypets = await Pets.findByPK(id);

  if (homepage === null) {
    return res.status(404).send({ message: "pets are not found" });
  }

  res.status(200).send({ message: "ok", pets });
});

module.exports = router;
