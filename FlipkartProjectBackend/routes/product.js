var express = require("express");
var router = express.Router();
var productController = require("../controllers/product");

router.post("/", productController.createProduct);
router.get("/", productController.getProducts);

module.exports=router;