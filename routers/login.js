const express = require("express");
const { Router } = express;
const router = new Router();
const bcrypt = require("bcrypt");

const { user } = require("../models");
const { toJWT } = require("../auth/jwt");

router.post("/login", async (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).send("Please provide an valid email and password");
  }
  const foundUser = await user.findOne({ where: { email: req.body.email } });
  if (foundUser === null) {
    return res.status(401).send("User not found");
  }
  if (!bcrypt.compareSync(req.body.password, foundUser.dataValues.password)) {
    return res.status(401).send("password was wrong");
  }
  res.send({ jwt: toJWT({ userId: foundUser.dataValues.id }) });
});

module.exports = router;
