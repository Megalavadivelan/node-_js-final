const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
//     const user = async (user) => {
//     console.log(user)
//     const saltRounds = 10;
//     const plainPassword = user.password;

//     const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

  
//     user.password = hashedPassword;

  
//     const userData = await userModel.create(user);

//     return userData;
// };


const getUser = async (getUser) => {
    console.log("service - get user");
    const getuserdata = await userModel.find()
    return getuserdata
}

const getspecificUser = async(getspecificUser)=>{
    const getspecificdata = await userModel.findById({_id: getspecificUser})
    return getspecificdata


}

const getindividualdata = async(singledata)=>{
    const result = await userModel.aggregate([
        {
               $match: { _id : new mongoose.Types.ObjectId(singledata)}
        }
    ])
    return result
}

const deleteUser = async(deleteUser)=>{
    const deletespecificdata = await userModel.findByIdAndDelete({_id :deleteUser})
    return deletespecificdata
}

const updateuserData = async(updateuserData,updatebody)=>{
    // const updatingdata = await userModel.findByIdAndUpdate({_id:updateuserData},updatebody,{new:true})
    // return updatingdata
    const updateuserdata = await userModel.findByIdAndUpdate(userdataupdate,{$set:updatebody},{new:true})
    return updateuserdata
}

const user = async (userData) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

    userData.password = hashedPassword;

    const savedUser = await userModel.create(userData);
    return savedUser;
};
// const loginUserdata = async (loginData) => {
//     const user = await userModel.findOne({ email: loginData.email });

//     if (!user) {
//         return null;
//     }
//     const isMatch = await bcrypt.compare(loginData.password, user.password);

//     if (!isMatch) {
//         return null;
//     }

//     return user;
// };

// const loginUserdata = async(body)=>{
//     const {email, password} = body

//     const checkEmail = await userModel.findOne({email:email })

//     if(!checkEmail){
//         return { message:"User not found", success: false}
//     }

//     if(checkEmail){
//         const checkPassword = await userModel.findOne({password:password})
//         console.log("Login successfull")

//         const token = jwt.sign(
//             { _id:checkEmail._id , email: checkEmail.email},
//             "XH1KSP_VDM",
//             {expiresIn: "12hr"}
//         )
//         console.log(token,"Token")
//         return { message: "Login successful", token:token , success: true}
//     }
// }
module.exports = {
    user,
    getUser,
    getspecificUser,
    deleteUser,
    updateuserData,
    // loginUserdata,
    getindividualdata
}