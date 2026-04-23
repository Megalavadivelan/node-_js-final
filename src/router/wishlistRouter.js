const express = require("express")
const router = express.Router()
const wishlistcontroller = require("../controller/wishlistcontroller")
router.post("/create",wishlistcontroller.create)
module.exports = router
