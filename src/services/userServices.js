const userModel = require("../models/userModel")
    const user = async (user) => {
    console.log(user)
    const userData = await userModel.create(user)
    return userData
}

const getUser = async (getUser) => {
    console.log("service - get user");
    const getuserdata = await userModel.find()
    return getuserdata
}

const getspecificUser = async(getspecificUser)=>{
    const getspecificdata = await userModel.findById({_id: getspecificUser})
    return getspecificdata
}

const deleteUser = async(deleteUser)=>{
    const deletespecificdata = await userModel.findByIdAndDelete({_id :deleteUser})
    return deletespecificdata
}

const updateuserData = async(updateuserData,updatebody)=>{
    const updatingdata = await userModel.findByIdAndUpdate({_id:updateuserData},updatebody,{new:true})
    return updatingdata
}
module.exports = {
    user,
    getUser,
    getspecificUser,
    deleteUser,
    updateuserData
}