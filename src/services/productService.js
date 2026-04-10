const productModel = require("../models/productModel")
const Productmodel = require("../models/productModel")
const product = async(product)=>{
    console.log(product)
     const productData = await Productmodel.create(product)
    return productData
}
const getproduct = async(getproduct)=>{
    console.log("service - get product")
    const getproductData = await ProductModel.find()
    return getproductData
}

const getspecificProduct = async(getspecificProduct)=>{
    const getspecificdata = await productModel.findById({_id: getspecificProduct})
    return getspecificdata
}

const deletespecificdata = async(deletespecificdata)=>{
    const deleteproduct = await productModel.findByIdAndDelete({_id: deletespecificdata})
    return deleteproduct
}


module.exports = {
    product,
    getproduct,
    getspecificProduct,
    deletespecificdata
}