const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const { SALT_ROUNDS } = require("../config/constants");

const router = new Router();

router.post("/signup", async (req, res) => {
  const {
    fullName,
    userName,
    email,
    password,
    streetName,
    city,
    houseNumber,
    phoneNumber,
    isCaretaker,
    animalTypesInterested,
    description,
  } = req.body;
  if (!email || !password || !fullName || !city || !animalTypesInterested) {
    return res
      .status(400)
      .send(
        "Please provide all required fields. These are: full name, username, email, password, city and the animal types your interested in"
      );
  }

  try {
    const newUser = await User.create({
      fullName,
      userName,
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      streetName,
      city,
      houseNumber,
      phoneNumber,
      isCaretaker,
      animalTypesInterested,
      description,
    });

    delete newUser.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: newUser.id });

    res.status(201).json({ token, ...newUser.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
