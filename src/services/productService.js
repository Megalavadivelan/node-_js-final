const productModel = require("../models/productModel")
const product = async(product)=>{
    console.log(product)
     const productData = await productModel.create(product)
    return productData
}
const getproduct = async(getproduct)=>{
    console.log("service - get product")
    const getproductData = await productModel.find()
    return getproductData
}

const getspecificProduct = async(getspecificProduct)=>{
    const getspecificdata = await productModel.findById({_id: getspecificProduct})
    return getspecificdata
}

const deletespecificdata = async(deletespecificdata)=>{
    const deleteproduct = await productModel.findByIdAndDelete(deletespecificdata)
    return deleteproduct
}

const updateproductData = async(updateproductData,updateproductbody)=>{
    const updatingproduct = await productModel.findByIdAndUpdate({_id:updateproductData},updateproductbody,{new:true})
    return updatingproduct
}

module.exports = {
    product,
    getproduct,
    getspecificProduct,
    deletespecificdata,
    updateproductData
}