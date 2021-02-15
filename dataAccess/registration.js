const conn = require('../config/db.config');
const connection = require('../config/db.config');

var createNewUser = (data,pin_code, callback) => {
   // console.log(user_password)
   connection.query(`INSERT INTO student (student_name,student_registration_number,pin_code,year_of_entrance,total_credit_hour,department_id,user_email) VALUES 
   ('${data.student_name}',
   '${data.student_registration_number}',
   '${pin_code}',
   ${data.year_of_entrance},
   ${data.total_credit_hour},
   ${data.department_id},
   '${data.student_email}')`,(err, result) => {
        if(err) {
            console.log(err);
        }
        
        callback(err, result);
    });
}

var getUserData = (data,callback)=>{
    connection.query(`SELECT * FROM student WHERE student_registration_number='${data.student_registration_number}'`,(err,result)=>{
        if(err) console.log(err);
        callback(err,result);
    });
};

var insertLoginData = (user_id, callback) => {
    connection.query(`INSERT INTO userlogin (user_id) VALUES ('${user_id}')`, (err, result) => {
        if(err) console.log(err);
        callback(err, result);
    });
}


module.exports = {
    createNewUser,
    getUserData,
    insertLoginData
}
