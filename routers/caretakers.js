const { Router } = require("express");
const Caretaker = require("../models").user;

const router = new Router();

router.get("/", async (req, res) => {
  const caretakers = await Caretaker.findAll();
  res.status(200).send({ message: "ok", caretakers });
});

module.exports = router;
