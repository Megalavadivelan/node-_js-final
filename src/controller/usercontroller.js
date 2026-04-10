const userServices = require("../services/userServices")

const createUser = async (req,res) => {
    console.log("user controller is working");
    const userCreation = await userServices.user(req.body)
    res.send(userCreation)
}

const getUserData = async (req,res) => {
    console.log("controller - get");
    const getuser = await userServices.getUser()
    res.send(getuser)
}

const getspecificUserData = async(req,res)=>{
    console.log("specific data -get")
    const getData = await userServices.getspecificUser(req.params.id)
    res.send(getData)
}

const deleteUserData = async(req,res)=>{
    console.log("delete the data")
    const deletedata = await userServices.deleteUser(req.params.id)
    res.send(deletedata)
}

module.exports = {
    createUser,
    getUserData,
    getspecificUserData,
    deleteUserData
}