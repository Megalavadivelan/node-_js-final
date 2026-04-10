const express = require("express")
const router = express.Router()
const userController = require("../controller/userController")
router.post("/create", userController.createUser)
router.get("/getdata", userController.getUserData)
router.get("/getspecific/user/:id",userController.getspecificUserData)
router.delete("/delete/user/:id",userController.deleteUserData)
module.exports = router