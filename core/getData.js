const getDataAccess = require('../dataAccess/getData');
const { BadRequestError, InternalServerError, NotFound } = require('../helper/exception');
const requestHandler = require('../helper/requestHandler.js');

var getAllTrainingCompany = (callback) => {
    try {
        getDataAccess.getAllTrainingCompany((err,result)=>{
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


var getAllStudents = (callback) => {
    try {
        getDataAccess.getAllStudents((err,result)=>{
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

var getAllDepartments = (callback) => {
    try {
        getDataAccess.getAllDepartments((err,result)=>{
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




var getAllCourses = (callback) => {
    try {
        getDataAccess.getAllCourses((err,result)=>{
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


var getAllCareers = (callback) => {
    try {
        getDataAccess.getAllCareers((err,result)=>{
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


var getAllCareerCourse = (callback) => {
    try {
        getDataAccess.getAllCareerCourse((err,result)=>{
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



var getAllStudentCourse = (callback) => {
    try {
        getDataAccess.getAllStudentCourse((err,result)=>{
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
module.exports = {
    getAllTrainingCompany,
    getAllStudents,
    getAllDepartments,
    getAllCourses,
    getAllCareers,
    getAllCareerCourse,
    getAllStudentCourse
}