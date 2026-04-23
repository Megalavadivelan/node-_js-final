const empService = require("../services/empService")

const createEmp = async(req,res)=>{
    console.log("Employee controller is Working")
    const empCreation = await empService.empcreate(req.body)
    res.send(empCreation)
}

module.exports = {
    createEmp
}

// const empService = require("../services/empService");

// const createEmp = async (req, res) => {
//     try {
//         console.log("Employee controller is Working");

//         const empCreation = await empService.empcreate(req.body);

//         res.status(201).send(empCreation);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Error creating employee");
//     }
// };

// module.exports = {
//     createEmp
// };