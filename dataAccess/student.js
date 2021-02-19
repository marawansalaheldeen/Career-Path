const connection = require('../config/db.config');

var getStudentCourseById = (stId,callback) => {
  
   connection.query(`
   SELECT t1.*,t2.* 
   FROM student_course t1
   INNER JOIN course t2 ON t1.course_id = t2.course_id
   WHERE student_id = ${stId}
   `,(err, result) => {
        if(err) {
            console.log(err);
        }
        callback(err, result);
    });
}

var getStudentById = (stId,callback) => {
  
    connection.query(`SELECT * FROM student WHERE student_id = ${stId}`,(err, result) => {
         if(err) {
             console.log(err);
         }
         callback(err, result);
     });
 }

var chooseCareer = (data,callback) => {
  
    connection.query(`
    UPDATE student SET 
    career_id=${data.career_id} , 
    training_company_id = ${data.training_company_id} , 
    training_status = ${data.training_status} 
    WHERE student_id = ${data.student_id}`
    ,(err, result) => {
         if(err) {
             console.log(err);
         }
         callback(err, result);
     });
 }


 var getCareerPathByCareerId = (career_id,callback) => {
  
    connection.query(`SELECT * FROM career_course WHERE career_id = ${career_id}`,(err, result) => {
         if(err) {
             console.log(err);
         }
         callback(err, result);
     });
 } 
module.exports = {
    getStudentCourseById,
    chooseCareer,
    getCareerPathByCareerId,
    getStudentById
}
