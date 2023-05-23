var express = require("express");
const router = express.Router();
//const UserData = require("../controllers/index");

router.get("/", (req, res, next) => {
  res.send("Welcome To Route");
});

//router.post("/", UserData.createUser);

module.exports = router;
