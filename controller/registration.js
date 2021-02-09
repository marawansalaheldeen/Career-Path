const userService = require('../core/registrationService');


var createNewUser = async (req, res) => {

    try {
        const userData = {
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email,
            user_password:req.body.user_password,
            phone_number:req.body.phone_number,
            city:req.body.city_id,
            address_line:req.body.address_line,
            pin_code:req.body.pin_code
        }
        
        await userService.createNewUser(userData,(result)=>{
            res.send(result);
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