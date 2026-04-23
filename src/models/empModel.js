const mongoose = require("mongoose")
const employeeSchema = new mongoose.Schema({
    name:{
        type:String
    },
   age:{
    type:Number
   },
   phone:{
    type:Number
   },
   email:{
    type:String
   },
   password:{
    type:String
   }
})

const empModel = mongoose.model("employee",employeeSchema)
module.exports = empModel