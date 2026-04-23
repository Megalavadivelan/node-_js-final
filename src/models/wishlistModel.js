const mongoose = require("mongoose")

const wishlistSchema = new mongoose.Schema({
    userID : {
        type: mongoose.Schema.Types.ObjectId
    },
    productId : {
        type: mongoose.Schema.Types.ObjectId
    }
})

const wishlistModel = mongoose.model("wishlist",wishlistSchema)
module.exports = wishlistModel