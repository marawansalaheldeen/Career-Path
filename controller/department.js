const departmentService = require('../core/depatmentService.js');

const crateDepartment = (req, res)=>{
    try{
        deptData = {
            deptName: req.body.deptName
        }

        departmentService.createDepartment(deptData, (result)=>{
            if (result.status) {
                // logger.log(`error`, `error occuerd on getting allsuppliers data, ${result.errors}`)
                res.status(result.status).send(result.errors)
            } else {
                // logger.log(`info`, `all supplier data retrieved successfully in controller`);
                res.send({ message: "department is added successfully" });
            }
        })
    }catch(err){

    }
}

module.exports = {
    crateDepartment
}