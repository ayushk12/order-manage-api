const express = require("express");

const router = express.Router();
// calling controller file -productController
const productController = require("../controller/productController");

// all the api call
router.get("/", productController.getProduct);
router.post("/create", productController.addProduct);
router.get("/:id", productController.getSingleProduct);

module.exports = router;
