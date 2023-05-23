var express = require("express");
const router = express.Router();
const UserData = require("../controllers/index");

router.get("/", UserData.getUsers);
router.get("/:id", UserData.getUser);
router.post("/", UserData.createUser);
router.post("/login",UserData.loginUser);

module.exports = router;
