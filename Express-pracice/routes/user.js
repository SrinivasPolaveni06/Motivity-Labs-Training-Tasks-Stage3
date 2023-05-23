var express = require("express");
var router = express.Router();

var useDataController = require("../controllers/userDetails");
//var config = require("../config");

/* GET users listing. */
router.post("/", useDataController.createUser);

router.get("/", useDataController.getuserDetails);
router.get("/:id", useDataController.getuserDetail);
router.put("/:id", useDataController.updateUserDetails);
router.delete("/:id", useDataController.deleteUserDetails);

module.exports = router;