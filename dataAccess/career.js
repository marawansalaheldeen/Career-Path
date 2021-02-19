const connection = require('../config/db.config');

const createCareer = (careerData, callback)=>{
    console.log("data", careerData);
    connection.query(`INSERT INTO career (job_name, job_description, training_company_id) 
    VALUES ('${careerData.jobName}',
            '${careerData.jobDescription}',
             ${careerData.trainingId})`, (err, result)=>{
        if (err) {
            console.log(err);
            // logger.log(`error`, `error occuered in data access on updating bundle status: ${bundleIds}, ${err}`);
        }
        console.log(err);
        callback(err, result);
    })
}

const setCareerCourses = (careerData, courseId, callback)=>{
    console.log("data", careerData, courseId);
    connection.query(" INSERT INTO career_course " +
    " (career_id, course_id, maximum_grade, minimum_grade) " + 
    " VALUES (?,?,?,?) ", [careerData.careerId, courseId, careerData.maxGrade, careerData.minGrade] ,(err, result)=>{
        if (err) {
            console.log(err);
            // logger.log(`error`, `error occuered in data access on updating bundle status: ${bundleIds}, ${err}`);
        }
        console.log(err);
        callback(err, result);
    })
}

module.exports = {
    createCareer,
    setCareerCourses
}