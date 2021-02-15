const userAccess = require('../dataAccess/registration');
const { BadRequestError, InternalServerError, NotFound } = require('../helper/exception');
const requestHandler = require('../helper/requestHandler.js');
const tokenConfig = require('../config/token');
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');


var createNewUser = (userData, callback) => {
    try {
        userAccess.getUserData(userData,(err,result1)=>{
            if(result1.length == 0){
                const pin_code = cryptr.encrypt(userData.pin_code);
                console.log(pin_code);
                userAccess.createNewUser(userData,pin_code, (err, result) => {
                    try {
                        if (err) {
                            throw new InternalServerError('Inetrnal server error, we are tarcking these issues.')
                        }
                        callback(result);
                    }catch (error) {
                        requestHandler.HandleRequest(error, (result) => {
                            callback(result);
                        })
                    }
                }); 
            }else{
                callback("Warning User Already Registered")
            }
        });
  

    } catch (error) {
        requestHandler.HandleRequest(error, (result) => {
            callback(result);
        })
    }
}

var userLogin = (loginData, callback) => {
    try {
        userAccess.getUserData(loginData,(err,result)=>{
            try {
                if (err) {
                    throw new InternalServerError('Inetrnal server error, we are tarcking these issues.')
                }
                
                if(result.length != 0){

                    const userdatabasepassword = result[0].pin_code;
                    const decryptdPassword = cryptr.decrypt(userdatabasepassword);
                    
                    
                    if(loginData.pin_code === decryptdPassword){
                        const token = tokenConfig.createToken(loginData.student_registration_number);

                            callback({
                                "Message":"You Logged In Successfully",
                                "student_id":result[0].student_id,
                                "student_name":result[0].student_name,
                                "student_registration_number":result[0].student_registration_number,
                                "pin_code":result[0].pin_code,
                                "year_of_entrance":result[0].year_of_entrance,
                                "total_credit_hour":result[0].total_credit_hour,
                                "department_id":result[0].department_id,
                                "usertoken":token
                            });
                    }else{
                        callback("Wrong Email Or Password");
                    }
                }else{
                    callback("User Not Found");
                }

            }
            catch (error) {
                requestHandler.HandleRequest(error, (result) => {
                    callback(result);
                })
            }

        });
        


    } catch (error) {
        requestHandler.HandleRequest(error, (result) => {
            callback(result);
        })
    }
}
module.exports = {
    createNewUser,
    userLogin
}