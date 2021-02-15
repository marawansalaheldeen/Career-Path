const getDataService = require('../core/getData');


var getAllTrainingCompany = async (req, res) => {

    try {
        await getDataService.getAllTrainingCompany((result)=>{
            res.send({"Server_Response":result});
        })
    } catch (error) {
        console.log(error);
    }
}


var getAllStudents = async(req,res)=>{

    try {
    
        await getDataService.getAllStudents((result)=>{
            res.send({"Server_Response":result});
        })

    } catch (error) {
        console.log(error)
    }
}

var getAllDepartments = async(req,res)=>{

    try {
    
        await getDataService.getAllDepartments((result)=>{
            res.send({"Server_Response":result});
        })

    } catch (error) {
        console.log(error)
    }
}

var getAllCourses = async(req,res)=>{

    try {
    
        await getDataService.getAllCourses((result)=>{
            res.send({"Server_Response":result});
        })

    } catch (error) {
        console.log(error)
    }
}


var getAllCareers = async(req,res)=>{

    try {
    
        await getDataService.getAllCareers((result)=>{
            res.send({"Server_Response":result});
        })

    } catch (error) {
        console.log(error)
    }
}

var getAllCareerCourse = async(req,res)=>{

    try {
    
        await getDataService.getAllCareerCourse((result)=>{
            res.send({"Server_Response":result});
        })

    } catch (error) {
        console.log(error)
    }
}


var getAllStudentCourse = async(req,res)=>{

    try {
    
        await getDataService.getAllStudentCourse((result)=>{
            res.send({"Server_Response":result});
        })

    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    getAllTrainingCompany,
    getAllStudents,
    getAllDepartments,
    getAllCourses,
    getAllCareers,
    getAllCareerCourse,
    getAllStudentCourse
}