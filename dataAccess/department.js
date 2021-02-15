const connection = require('../config/db.config');

const createDepartment = (deptData, callback)=>{
    connection.query(`INSERT INTO department(department_name) values('${deptData.deptName}')`, (err, result)=>{
        if (err) {
            console.log(err);
            // logger.log(`error`, `error occuered in data access on updating bundle status: ${bundleIds}, ${err}`);
        }
        callback(err, result);
    })
}

module.exports = {
    createDepartment
}