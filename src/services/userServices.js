const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const nodemailer = require("nodemailer")
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

// const loginUserdata = async (body) => {
//     const { email, password } = body;

//     const user = await userModel.findOne({ email });

//     if (!user) {
//         return { message: "User not found", success: false };
//     }

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//         return { message: "Invalid user", success: false };
//     }
//     const token = jwt.sign(
//         { _id: user._id, email: user.email },
//         "XH1KSP_VDM",
//         { expiresIn: "12h" }
//     );

//     return { message: "Login successful", token, success: true };
// };
const loginUserdata = async (body) => {
    const { email, password } = body;

    const user = await userModel.findOne({ email });

    if (!user) {
        return { message: "User not found", success: false };
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return { message: "Invalid user", success: false };
    }
    const token = jwt.sign(
        { _id: user._id, email: user.email },
        "XH1KSP_VDM",
        { expiresIn: "12h" }
    );

    return {
        message: "Login successful",
        token,
        success: true
    };
};

const wishlistData = async (id) => {
    const result = await userModel.aggregate([
        {
            $match: { _id: new mongoose.Types.ObjectId(id) }
        },
        {
            $lookup: {
                from: "wishlists",
                localField: "_id",
                foreignField: "userID",
                as: "wishlistdata",
            }
        },
        {
            $lookup: {
                from: "products",
                localField: "wishlistdata.productId",
                foreignField: "_id",
                as: "productData",
                pipeline:[{
                    $project: {
                    name:1,
                    model:1,
                    os:1,
                    price:1
                    }
                }]
            }
        },
        {
            $project:{
                name:1,
                age:1,
                Phone:1,
                email:1,
                productData:1,
                wishlist:{$size:"$productData"},
                totalprice:{$sum:"$productData.price"}

                
            }
        }
    ]);

    return result;
};

// 

const sendOtp = async (body) => {
    try {
        console.log(body.email);
        const { email } = body;

        const checkEmail = await userModel.findOne({ email });
        console.log(checkEmail);

        if (!checkEmail) {
            return { message: "Email not found", success: false };
        }

        // 🔹 Generate OTP
        const otp = Math.floor(100000 + Math.random() * 900000);

        // (Optional) Save OTP in DB
        checkEmail.otp = otp;
        await checkEmail.save();

        // 🔹 Create transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "megalav2112@gmail.com",
                pass: "awfp cxzh cbxy mwoy" // Gmail App Password
            }
        });

        // 🔹 Mail content
        const mailOptions = {
            from: "megalav2112@gmail.com",
            to: email,
            subject: "OTP Verification",
            text: `Your OTP is ${otp}`
        };

        // 🔹 Send email
        await transporter.sendMail(mailOptions);

        return { message: "OTP sent successfully", success: true };

    } catch (error) {
        console.log(error);
        return { message: "Error sending OTP", success: false };
    }
};

module.exports = {
    user,
    getUser,
    getspecificUser,
    deleteUser,
    updateuserData,
    loginUserdata,
    getindividualdata,
    wishlistData,
    sendOtp
}