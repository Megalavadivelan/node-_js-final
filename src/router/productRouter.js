const express = require("express")
const router = express.Router()
const productcontroller = require("../controller/productcontroller")
router.post("/create", productcontroller.createproduct)
router.get("/getdata", productcontroller.getproductData)
router.get("/getspecific/product/:id", productcontroller.getspecificProductData)
router.delete("/delete/product/:id",productcontroller.deletespecificproduct)
module.exports = router