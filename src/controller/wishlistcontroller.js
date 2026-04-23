const wishlistService = require("../services/wishlistService")

const create = async (req,res) => {
    console.log("user controller is working");
    const Creation = await wishlistService.wishlistdata(req.body)
    res.send(Creation)
}

module.exports = {
    create
}

