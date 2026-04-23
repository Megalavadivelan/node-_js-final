const wishlistModel = require("../models/wishlistModel")
const wishlistdata = async (wishlistdata) => {
    console.log(wishlistdata)
    const data = await wishlistModel.create(wishlistdata)
        return data
}
module.exports={
    wishlistdata
}