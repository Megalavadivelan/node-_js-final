
// const mongoose = require("mongoose")
// mongoose.connect("mongodb+srv://Megala:2112vmegala@cluster0.en0aolw.mongodb.net/?appName=Cluster0")
// .then(()=>{
//     console.log("db is connected successfully");
// })
// .catch((error)=>{
//     console.log(error,"Db is not connected");
// })

// module.exports = mongoose.connection

const mongoose = require("mongoose");
// mongoose.connect("mongodb+srv://Megala:megalav2112@cluster0.en0aolw.mongodb.net/nodejs",  { family: 4 })

mongoose.connect("mongodb://localhost:27017/project")
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log(err, "DB not connected");
  });

module.exports = mongoose.connection;