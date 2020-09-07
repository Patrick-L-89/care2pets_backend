const { Router } = require("express");

const router = new Router();

router.get("/", (req, res) => {
  res.send("server is up and running");
});

module.exports = router;
