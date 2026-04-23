const express = require("express")
const db = require("./src/database/config")
const app = express()
const userRouter = require("./src/router/userRouter")
const productRouter = require("./src/router/productRouter")
const empRouter = require("./src/router/empRouter")
const wishlistRouter = require("./src/router/wishlistRouter")
const bodyparser = require("body-parser")

app.use(bodyparser.json())
app.use("/user",userRouter)
app.use("/product",productRouter)
app.use("/employee",empRouter)
app.use("/wishlist",wishlistRouter)

db.on("open",()=>{
    app.listen(7043,()=>{
        console.log("Server is running on port 7043");
    })
})
db.on("error",()=>{
    console.log("error for connecting database")
})


