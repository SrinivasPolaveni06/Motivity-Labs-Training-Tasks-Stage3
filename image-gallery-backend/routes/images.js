var express = require("express");
var router = express.Router();
var productController = require("../controllers/index");
var upload = require("../middilware/index");
router.post("/", upload.single("pic"), productController.createProduct);
router.get("/", productController.getProducts);

module.exports = router;
