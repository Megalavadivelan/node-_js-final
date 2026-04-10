const productService = require("../services/productService")

const createproduct = async (req,res) => {
    console.log("Product controller is working");
    const productCreation = await productService.product(req.body)
    res.send(productCreation)
}

const getproductData = async (req,res) => {
    console.log("product - get");
    const product = await productService.getproduct()
    res.send(product)
    
}

const getspecificProductData = async(req,res)=>{
    const getdata = await productService.getspecificProduct(req.params.id)
    res.send(getdata)
} 


const deletespecificproduct = async(req,res)=>{
    const deletedata = await productService.deletespecificdata(req.params.id)
    res.send(deletedata)
}
module.exports = {
    createproduct,
    getproductData,
    getspecificProductData,
    deletespecificproduct
}