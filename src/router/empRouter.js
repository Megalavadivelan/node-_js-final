const express = require("express")
const router = express.Router()
const empcontroller = require("../controller/empcontroller")
router.post("/create", empcontroller.createEmp)
module.exports = router