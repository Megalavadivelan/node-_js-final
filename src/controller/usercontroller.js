const userServices = require("../services/userServices")

const createUser = async (req,res) => {
    // console.log("user controller is working");
    // const userCreation = await userServices.user(req.body)
    // res.send(userCreation)
     try{
            const user = await userServices.user(req.body)
            res.status(201).send({message: "Product data created successfully!!",userdata:user,success:true})
        }
        catch(error){
                res.status(500).send({ message:"Internal server error", success: false})
            }
}

const getUserData = async (req,res) => {
    // console.log("controller - get");
    // const getuser = await userServices.getUser()
    // res.send(getuser)

    try{
        const user = await userServices.getUser()
        res.status(200).send({message:"User data retrived successfully !!!",userData:user,success:true})
    }
    catch(error){
        res.status(500).send({ message:"Internal server error", success: false})
    }
}

const getspecificUserData = async(req,res)=>{
    // console.log("specific data -get")
    // const getData = await userServices.getspecificUser(req.params.id)
    // res.send(getData)

    try{
        const user = await userServices.getspecificUser(req.params.id)
        res.status(200).send({message:"user data fetched successfully !!!",userData:user ,success:true})
    }
   catch(error){
        res.status(500).send({ message:"Internal server error", success: false})
    }
}

const deleteUserData = async(req,res)=>{
    // console.log("delete the data")
    // const deletedata = await userServices.deleteUser(req.params.id)
    // res.send(deletedata)

    try{
        const deletedata = await userServices.updateuserData(req.params.id)
        res.status(200).send({message:"User data deleted Successfully!!",userdata:deletedata,success:true})
    }
    catch(error){
        res.status(500).send({message:"Internal server error",success:false})
    }
}

const updateuser = async(req,res)=>{
    // const data = await userServices.updateuserData(req.params.id,req.body)
    // res.send(data)

    try{
        const updateuser = await userServices.updateuserData(req.params.id,req.body)
        res.status(200).send({message:"User data Updated Successfully!!",userdata:updateuser,success:true})
    }
    catch(error){
        res.status(500).send({message:"Internal server error",success:false})
    }


}
module.exports = {
    createUser,
    getUserData,
    getspecificUserData,
    deleteUserData,
    updateuser
}