// const empModel = require("../models/empModel")\
//  const empcreate = async (emp) => {
//     console.log(emp)
// const saltRounds = 10;
// const plainPassword = emp.password;
// const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
// return hashedPassword
//  }


// module.exports = {
//     hashedPassword
// }




const empModel = require("../models/empModel");
const bcrypt = require("bcrypt");

const empcreate = async (emp) => {
    console.log(emp);

    const saltRounds = 10;
    const plainPassword = emp.password;

    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

  
    emp.password = hashedPassword;

  
    const empData = await empModel.create(emp);

    return empData;
};

module.exports = {
    empcreate
};