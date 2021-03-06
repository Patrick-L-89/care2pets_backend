const { Router } = require("express");
const Caretaker = require("../models").user;
const Pets = require("../models").pet;

const router = new Router();

router.get("/", async (req, res) => {
  const caretakers = await Caretaker.findAll();
  res.status(200).send({ message: "ok", caretakers });
});

router.get("/:animalTypes", async (req, res) => {
  const { animalTypes } = req.params;

  console.log("WHAT IS animalTypes?", animalTypes);

  const searchCaretakers = await Caretaker.findAll({
    where: { animalTypesInterested: animalTypes },
  });

  if (searchCaretakers === null) {
    return res
      .status(404)
      .send({ message: "no caretakers with your criterea were found" });
  }

  res.status(200).send({ message: "ok", searchCaretakers });
});

router.get("/mypets/:id", async (req, res) => {
  const { id } = req.params;

  console.log("WHAT IS ID?", id);

  const mypets = await Pets.findByPk(id);

  if (mypets === null) {
    return res.status(404).send({ message: "pets are not found" });
  }

  res.status(200).send({ message: "ok", mypets });
});

module.exports = router;
