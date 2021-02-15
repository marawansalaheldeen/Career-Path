const connection = require('../config/db.config');

var getAllTrainingCompany = (callback) => {
  
   connection.query(`SELECT * FROM training_company`,(err, result) => {
        if(err) {
            console.log(err);
        }
        callback(err, result);
    });
}

var getAllStudents = (callback) => {
   
    connection.query(`SELECT t1.*,t2.department_name FROM student t1 INNER JOIN department t2 ON t1.department_id = t2.department_id`,(err, result) => {
         if(err) {
             console.log(err);
         }
         callback(err, result);
     });
 }


 var getAllDepartments = (callback) => {
    
    connection.query(`SELECT * FROM department`,(err, result) => {
         if(err) {
             console.log(err);
         }
         callback(err, result);
     });
 }


 var getAllCourses = (callback) => {
  
    connection.query(`SELECT t1.*,t2.department_name FROM course t1 INNER JOIN department t2 ON t1.department_id = t2.department_id`,(err, result) => {
         if(err) {
             console.log(err);
         }
         callback(err, result);
     });
 }

 var getAllCareers = (callback) => {
    
    connection.query(`SELECT t1.*,t2.* FROM career t1 INNER JOIN training_company t2 ON t1.training_company_id = t2.training_company_id`,(err, result) => {
         if(err) {
             console.log(err);
         }
         callback(err, result);
     });
 }

 var getAllCareerCourse = (callback) => {
    
    connection.query(`
    SELECT t1.*,t2.*,t3.* 
    FROM career_course t1 
    INNER JOIN career t2 ON t1.career_id = t2.career_id
    INNER JOIN course t3 ON t1.course_id = t3.course_id
    `,(err, result) => {
         if(err) {
             console.log(err);
         }
         callback(err, result);
     });
 }


 var getAllStudentCourse = (callback) => {
    connection.query(`
    SELECT t1.*,t2.*,t3.* 
    FROM student_course t1 
    INNER JOIN student t2 ON t1.student_id = t2.student_id
    INNER JOIN course t3 ON t1.course_id = t3.course_id
    `,(err, result) => {
         if(err) {
             console.log(err);
         }
         callback(err, result);
     });
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
