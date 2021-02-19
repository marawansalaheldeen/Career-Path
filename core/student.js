const studentAccess = require('../dataAccess/student');
const { BadRequestError, InternalServerError, NotFound } = require('../helper/exception');
const requestHandler = require('../helper/requestHandler.js');

var getStudentCourseById = (stId,callback) => {
    try {
        studentAccess.getStudentCourseById(stId,(err,result)=>{
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
    } catch (error) {
        requestHandler.HandleRequest(error, (result) => {
            callback(result);
        })
    }
}

var getStudentById = (stuId,callback) => {
    try {
        studentAccess.getStudentById(stuId,(err,result)=>{
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
    } catch (error) {
        requestHandler.HandleRequest(error, (result) => {
            callback(result);
        })
    }
}



var chooseCareer = (data,callback) => {
    try {
        studentAccess.chooseCareer(data,(err,result)=>{
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
    } catch (error) {
        requestHandler.HandleRequest(error, (result) => {
            callback(result);
        })
    }
}

var getCareerCourseForStudent = (stId,callback) => {
    try {
        studentAccess.getStudentById(stId,(err,result1)=>{
            try {
                if (err) {
                    throw new InternalServerError('Inetrnal server error, we are tarcking these issues.')
                }
                if(result1[0].career_id == null){
                    callback("No Career Chosen Yet");
                }else{

                    studentAccess.getCareerPathByCareerId(result1[0].career_id,(err,result3)=>{

                        studentAccess.getStudentCourseById(stId,(err,result2)=>{

                            var array3 = result3.filter(o => !result2.find(o2 => o.course_id === o2.course_id))
                            callback(array3)
                        });
                    });
                }

                

            }catch (error) {
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
    getStudentCourseById,
    chooseCareer,
    getStudentById,
    getCareerCourseForStudent
}