const departmentService = require('../dataAccess/department.js');
const { BadRequestError, InternalServerError, NotFound } = require('../helper/exception.js');
const requestHandler = require('../helper/requestHandler.js');

const createDepartment = (deptData, callback)=>{
    try{
        departmentService.createDepartment(deptData, (err, result)=>{
            try {
                if (err) {
                    console.log(err)
                    throw new InternalServerError('Inetrnal server error, we are tarcking these issues.')
                }
                callback(result);
            }
            catch (err) {
                requestHandler.HandleRequest(err, (result) => {
                    callback(result);
                })
            }
        })
    }catch(err){
        requestHandler.HandleRequest(err, (result) => {
            callback(result);
        })
    }
}

module.exports = {
    createDepartment
}