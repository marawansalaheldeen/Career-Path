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
                const user_password = cryptr.encrypt(userData.student_password);
                userAccess.createNewUser(userData,user_password, (err, result) => {
                    try {
                        if (err) {
                            throw new InternalServerError('Inetrnal server error, we are tarcking these issues.')
                        }
                        callback(result);
                    }
                    catch (error) {
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

                    const userdatabasepassword = result[0].user_password;
                    const decryptdPassword = cryptr.decrypt(userdatabasepassword);
                    
                    console.log(result[0].user_id);
                    if(loginData.user_password === decryptdPassword){
                        const token = tokenConfig.createToken(loginData.email);
                        userAccess.insertLoginData(result[0].user_id,(err,result2)=>{
                            callback({
                                "Message":"You Logged In Successfully",
                                "user_id":result[0].user_id,
                                "first_name":result[0].first_name,
                                "last_name":result[0].last_name,
                                "user_email":result[0].email,
                                "phone_number":result[0].phone_number,
                                "city_id":result[0].city_id,
                                "address_line":result[0].address_line,
                                "usertoken":token
                            });
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