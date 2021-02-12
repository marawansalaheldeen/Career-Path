const userService = require('../core/registrationService');


var createNewUser = async (req, res) => {

    try {
        const userData = {
            student_name:req.body.student_name,
            student_registration_number:req.body.student_registration_number,
            pin_code:req.body.pin_code,
            year_of_entrance:req.body.year_of_entrance,
            total_credit_hour:req.body.total_credit_hour,
            department_id:req.body.department_id,
            student_email:req.body.student_email,
            student_password:req.body.student_password
        }
        
        await userService.createNewUser(userData,(result)=>{
            res.send({"Server_Response":result});
        })
    } catch (error) {
        console.log(error);
    }
}


var userLogin = async(req,res)=>{

    try {
        
    const loginData = {
        email:req.body.email,
        user_password:req.body.user_password
    }
    
    await userService.userLogin(loginData,(result)=>{
        res.send(result);
    })
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    createNewUser,
    userLogin
}