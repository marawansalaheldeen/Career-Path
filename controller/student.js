const studentService = require('../core/student');


var getStudentCourseById = async (req, res) => {
    var stId = req.params.student_id;
    try {
        await studentService.getStudentCourseById(stId,(result)=>{
            res.send({"Server_Response":result});
        })
    } catch (error) {
        console.log(error);
    }
}

var getStudentById = async (req, res) => {
    var stuId = req.params.student_id;
    try {
        await studentService.getStudentById(stuId,(result)=>{
            res.send({"Server_Response":result});
        })
    } catch (error) {
        console.log(error);
    }
}


var chooseCareer = async (req, res) => {
    var data = {
        student_id:req.body.student_id,
        career_id:req.body.career_id,
        training_company_id:req.body.training_company_id,
        training_status:req.body.training_status
    }
    try {
        await getDataService.chooseCareer(data,(result)=>{
            res.send({"Server_Response":result});
        })
    } catch (error) {
        console.log(error);
    }
}


var getCareerCourseForStudent = async (req, res) => {
    var stId = req.params.student_id;
    try {
        await studentService.getCareerCourseForStudent(stId,(result)=>{
            res.send({"Server_Response":result});
        })
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getStudentCourseById,
    chooseCareer,
    getStudentById,
    getCareerCourseForStudent
}