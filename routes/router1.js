const express = require('express');
const router = new express.Router();

const {createNewUser,userLogin}=require('../controller/registration');
const {
    getAllTrainingCompany,
    getAllStudents,
    getAllDepartments,
    getAllCourses,
    getAllCareers,
    getAllCareerCourse,
    getAllStudentCourse
    
}=require('../controller/getData');
const {getStudentCourseById,chooseCareer,getStudentById,getCareerCourseForStudent} = require('../controller/student');

router.post('/newuser',createNewUser);
router.post('/userlogin',userLogin);

/////////////////////////

router.get('/admin/getAllTrainingCompany',getAllTrainingCompany);

router.get('/admin/getAllStudents',getAllStudents);

router.get('/admin/getAllDepartments',getAllDepartments);

router.get('/admin/getAllCourses',getAllCourses);

router.get('/admin/getAllCareers',getAllCareers);

router.get('/admin/getAllCareerCourse',getAllCareerCourse);

router.get('/admin/getAllStudentCourse',getAllStudentCourse);

router.get('/studentcoursebyid/:student_id',getStudentCourseById);

router.post('/studentchoosecareer',chooseCareer);

router.get('getstubyid/:student_id',getStudentById)

router.get('/getcareercourseforstuden/:student_id',getCareerCourseForStudent);

module.exports = router;