const careerDataAccess = require('../dataAccess/career.js');
const { BadRequestError, InternalServerError, NotFound } = require('../helper/exception.js');
const requestHandler = require('../helper/requestHandler.js');

const createCareer = (careerData, callback) => {
    try {
        careerDataAccess.createCareer(careerData, (err, result) => {
            try {
                if (err) {
                    console.log(err)
                    throw new InternalServerError('Inetrnal server error, we are tarcking these issues.')
                }
                callback(result);
            }
            catch (err) {
                requestHandler.HandleRequest(err, (result) => {
                    callback(result);
                })
            }
        })
    } catch (err) {
        requestHandler.HandleRequest(err, (result) => {
            callback(result);
        })
    }
}

const setCareerCourses = (careerData, callback) => {
    try {
        var i = 0;
        var max = careerData.courseId.length;
        doLoop();
        function doLoop() {
            setCareerCourse(careerData, careerData.courseId[i], (result) => {
                i++;
                if(i<max){
                    doLoop()
                }else{
                    callback("career courses created successfully");
                }
            })
        }

    } catch (err) {
        requestHandler.HandleRequest(err, (result) => {
            callback(result);
        })
    }
}

const setCareerCourse = (careerData, courseId, callback) => {
    try {
        careerDataAccess.setCareerCourses(careerData, courseId, (err, result) => {
            try {
                if (err) {
                    console.log(err)
                    throw new InternalServerError('Inetrnal server error, we are tarcking these issues.')
                }
                callback(result);
            }
            catch (err) {
                requestHandler.HandleRequest(err, (result) => {
                    callback(result);
                })
            }
        })
    } catch (err) {
        requestHandler.HandleRequest(err, (result) => {
            callback(result);
        })
    }
}

module.exports = {
    createCareer,
    setCareerCourses
}