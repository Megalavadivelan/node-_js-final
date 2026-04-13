const productService = require("../services/productService")

const createproduct = async (req,res) => {
    // console.log("Product controller is working");
    // const productCreation = await productService.product(req.body)
    // res.send(productCreation)
    try{
        const product = await productService.product(req.body)
        res.status(201).send({message: "Product data created successfully!!",productdata:product,success:true})
    }
    catch(error){
            res.status(500).send({ message:"Internal server error", success: false})
        }
}

const getproductData = async (req,res) => {
    // console.log("product - get");
    // const product = await productService.getproduct()
    // res.send(product)
     try{
            const product = await productService.getproduct()
            res.status(200).send({message:"Product data retrived successfully !!!",productData:product ,success:true})
        }
        catch(error){
            res.status(500).send({ message:"Internal server error", success: false})
        }
    
}

const getspecificProductData = async(req,res)=>{
    // const getdata = await productService.getspecificProduct(req.params.id)
    // res.send(getdata)
     try{
            const product = await productService.getspecificProduct(req.params.id)
            res.status(200).send({message:"Product data Updated successfully !!!",productData:product ,success:true})
        }
        catch(error){
            res.status(500).send({ message:"Internal server error", success: false})
        }


} 


const deletespecificproduct = async(req,res)=>{
    // const deletedata = await productService.deletespecificdata(req.params.id)
    // res.send(deletedata)

    try{
            const deleteproduct = await productService.deletespecificdata(req.params.id)
            res.status(200).send({message:"User data deleted Successfully!!",userdata:deleteproduct,success:true})
        }
        catch(error){
            res.status(500).send({message:"Internal server error",success:false})
        }
}

const updateproduct = async(req,res)=>{
    // const productdata = await productService.updateproductData(req.params.id,req.body)
    // res.send(productdata)

    try{
            const updateproduct = await productService.updateproductData(req.params.id,req.body)
            res.status(200).send({message:"User data Updated Successfully!!",productdata:updateproduct,success:true})
        }
        catch(error){
            res.status(500).send({message:"Internal server error",success:false})
        }
}
module.exports = {
    createproduct,
    getproductData,
    getspecificProductData,
    deletespecificproduct,
    updateproduct
}