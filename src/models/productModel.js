const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{
        type:String
    },
    model:{
        type: String
    },
    os:{
        type: String
    },
    price:{
        type: Number
    },
    display:{
        type: String
    }
})

const productModel = mongoose.model("product",productSchema)
module.exports = productModel