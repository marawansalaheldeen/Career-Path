const connection = require('../config/db.config');

var createNewUser = (data,user_password, callback) => {
    connection.query(`INSERT INTO user (first_name,last_name,email,user_password,phone_number,city,address_line) VALUES ('${data.first_name}','${data.last_name}','${data.email}','${user_password}','${data.phone_number}','${data.city}','${data.address_line}')`, (err, result) => {
        if(err) console.log(err);
        callback(err, result);
    });
}

var getUserData = (loginData,callback)=>{
    connection.query(`SELECT * FROM user WHERE email='${loginData.email}'`,(err,result)=>{
        if(err) console.log(err);
        callback(err,result);
    }) 
}

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
